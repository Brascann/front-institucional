# Guia de Deploy de Imagens - AWS S3 + CloudFront

## 🎯 Arquitetura Profissional

```
Usuário → CloudFront (CDN) → S3 Bucket (Origin)
           ↓
        Cache Edge
        Compressão
        HTTPS
```

## 📋 Passo a Passo

### 1. Criar Bucket S3

```bash
# Via AWS CLI
aws s3 mb s3://brascann-assets --region us-east-1

# Configurar como website bucket (opcional)
aws s3 website s3://brascann-assets \
  --index-document index.html \
  --error-document error.html
```

**Via Console AWS:**
1. Acesse S3 Console
2. "Create bucket"
3. Nome: `brascann-assets`
4. Região: `us-east-1` (ou sua preferência)
5. **Desmarque** "Block all public access" (vamos usar CloudFront OAI)
6. Habilite "Bucket Versioning" (recomendado)

### 2. Configurar Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontOAI",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity SEU_OAI_ID"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::brascann-assets/*"
    }
  ]
}
```

### 3. Organizar Estrutura de Pastas no S3

```
brascann-assets/
├── optimized/
│   ├── page_1.webp
│   ├── page_1_600.webp
│   ├── page_1_1200.webp
│   ├── page_1_1600.webp
│   ├── extracted_page1_img3.webp
│   ├── extracted_page1_img3_600.webp
│   ├── extracted_page1_img3_1200.webp
│   └── ...
└── products/
    ├── glide-plus.webp
    ├── 3x-forca.webp
    └── gotas.webp
```

### 4. Upload de Imagens

```bash
# Upload com metadados corretos
aws s3 sync ./brascann_images s3://brascann-assets/ \
  --cache-control "public, max-age=31536000" \
  --metadata-directive REPLACE \
  --content-type "image/webp" \
  --exclude "*" \
  --include "*.webp"

# Para PNG (se ainda tiver)
aws s3 sync ./brascann_images s3://brascann-assets/ \
  --cache-control "public, max-age=31536000" \
  --content-type "image/png" \
  --exclude "*" \
  --include "*.png"
```

### 5. Criar Distribuição CloudFront

**Via Console AWS:**

1. **CloudFront Console** → "Create Distribution"

2. **Origin Settings:**
   - Origin Domain: `brascann-assets.s3.us-east-1.amazonaws.com`
   - Origin Path: (deixe vazio)
   - Name: `S3-brascann-assets`
   - Origin Access: **Origin Access Control (OAC)** (recomendado) ou OAI
   - Clique em "Create new OAC" se não tiver

3. **Default Cache Behavior:**
   - Viewer Protocol Policy: **Redirect HTTP to HTTPS**
   - Allowed HTTP Methods: **GET, HEAD, OPTIONS**
   - Cache Policy: **CachingOptimized**
   - Compress Objects Automatically: **Yes** ✅

4. **Settings:**
   - Price Class: Escolha baseado na sua audiência
   - Alternate Domain Names (CNAMEs): `assets.brascann.com` (opcional)
   - SSL Certificate: 
     - Escolha certificado ACM se tiver domínio customizado
     - Ou use o certificado CloudFront padrão
   - Default Root Object: (deixe vazio)

5. **Create Distribution**

6. **Aguarde deploy** (~5-10 minutos)
   - Status mudará de "In Progress" para "Deployed"

### 6. Configurar DNS (Opcional - Domínio Customizado)

Se usar domínio próprio:

**Route 53:**
```
Tipo: CNAME
Nome: assets.brascann.com
Valor: d1234abcd5678.cloudfront.net
TTL: 300
```

**Outro provedor DNS:**
- Adicione CNAME apontando para sua distribuição CloudFront

### 7. Atualizar Aplicação

No arquivo `js/config.js`:

```javascript
const CONFIG = {
  // Substitua pela sua URL do CloudFront
  CDN_URL: 'https://d1234abcd5678.cloudfront.net',
  // Ou com domínio customizado:
  // CDN_URL: 'https://assets.brascann.com',
  
  ENV: 'production', // Altere para production
};
```

### 8. Script de Deploy Automatizado

Crie `scripts/deploy-images.sh`:

```bash
#!/bin/bash

BUCKET_NAME="brascann-assets"
SOURCE_DIR="./brascann_images"
DISTRIBUTION_ID="SEU_DISTRIBUTION_ID"

echo "🚀 Fazendo upload das imagens para S3..."

# Sync WebP
aws s3 sync "$SOURCE_DIR" "s3://$BUCKET_NAME/" \
  --cache-control "public, max-age=31536000, immutable" \
  --content-type "image/webp" \
  --exclude "*" \
  --include "*.webp" \
  --delete

# Sync PNG
aws s3 sync "$SOURCE_DIR" "s3://$BUCKET_NAME/" \
  --cache-control "public, max-age=31536000, immutable" \
  --content-type "image/png" \
  --exclude "*" \
  --include "*.png"

echo "✅ Upload concluído!"

# Invalidar cache do CloudFront
echo "🔄 Invalidando cache do CloudFront..."
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*"

echo "✨ Deploy finalizado com sucesso!"
```

## 🔒 Boas Práticas de Segurança

### 1. IAM Policy Mínima para Deploy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::brascann-assets",
        "arn:aws:s3:::brascann-assets/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

### 2. Habilitar Logs

**S3 Access Logs:**
```bash
aws s3api put-bucket-logging \
  --bucket brascann-assets \
  --bucket-logging-status \
  '{
    "LoggingEnabled": {
      "TargetBucket": "brascann-logs",
      "TargetPrefix": "s3-access-logs/"
    }
  }'
```

**CloudFront Logs:**
- No console CloudFront → Distribution Settings
- Standard Logging: **On**
- S3 Bucket: `brascann-logs`
- Log Prefix: `cloudfront-logs/`

## 💰 Otimização de Custos

1. **Lifecycle Policy** para versionamento:
```json
{
  "Rules": [
    {
      "Id": "DeleteOldVersions",
      "Status": "Enabled",
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 90
      }
    }
  ]
}
```

2. **Intelligent-Tiering** para imagens antigas:
```bash
aws s3api put-bucket-intelligent-tiering-configuration \
  --bucket brascann-assets \
  --id auto-archive \
  --intelligent-tiering-configuration '{
    "Id": "auto-archive",
    "Status": "Enabled",
    "Tierings": [
      {
        "Days": 90,
        "AccessTier": "ARCHIVE_ACCESS"
      }
    ]
  }'
```

## 📊 Monitoramento

### CloudWatch Alarms

```bash
# Alarme para erros 4xx/5xx
aws cloudwatch put-metric-alarm \
  --alarm-name brascann-cdn-errors \
  --alarm-description "Alert on CDN errors" \
  --metric-name 4xxErrorRate \
  --namespace AWS/CloudFront \
  --statistic Average \
  --period 300 \
  --threshold 5 \
  --comparison-operator GreaterThanThreshold \
  --evaluation-periods 2
```

## 🚀 Alternativas e Melhorias

### Opção 1: Usar AWS Amplify (Simplificado)
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add storage
amplify push
```

### Opção 2: Terraform (Infrastructure as Code)
```hcl
resource "aws_s3_bucket" "assets" {
  bucket = "brascann-assets"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled = true
  # ... configurações
}
```

### Opção 3: CDN Alternativo
- **Cloudflare R2** (mais barato, sem egress fees)
- **Vercel Blob Storage**
- **Bunny CDN**

## 📝 Checklist Final

- [ ] Bucket S3 criado e configurado
- [ ] Imagens otimizadas (WebP, múltiplas resoluções)
- [ ] CloudFront distribution criada
- [ ] OAC/OAI configurado
- [ ] HTTPS habilitado
- [ ] Compressão automática ativada
- [ ] Cache headers configurados
- [ ] DNS/CNAME configurado (se aplicável)
- [ ] Script de deploy testado
- [ ] Logs habilitados
- [ ] Monitoramento configurado
- [ ] `js/config.js` atualizado com URL do CDN
- [ ] Aplicação testada em produção

## 💡 Dicas

1. **Versionamento de assets**: Use hash nos nomes dos arquivos
   - `logo.png` → `logo.abc123.png`

2. **Preconnect**: Adicione no `<head>`:
```html
<link rel="preconnect" href="https://d1234abcd5678.cloudfront.net">
<link rel="dns-prefetch" href="https://d1234abcd5678.cloudfront.net">
```

3. **Lazy Loading**: Já implementado nos componentes

4. **WebP com fallback**: Considere usar `<picture>` para navegadores antigos

## 🆘 Troubleshooting

**Erro 403 Forbidden:**
- Verifique bucket policy
- Confirme OAC/OAI configurado corretamente

**Imagens não carregam:**
- Aguarde propagação do CloudFront (5-10 min)
- Verifique console do browser (F12)
- Teste URL diretamente: `https://sua-url.cloudfront.net/optimized/page_1.webp`

**Cache não invalida:**
- Use versionamento nos nomes de arquivo
- Ou force invalidação: `aws cloudfront create-invalidation --distribution-id ID --paths "/*"`

## 📚 Recursos

- [AWS S3 Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/best-practices.html)
- [CloudFront Performance](https://aws.amazon.com/cloudfront/performance/)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)
