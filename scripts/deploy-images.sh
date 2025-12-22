#!/bin/bash

# Script de Deploy de Imagens para AWS S3 + CloudFront
# Uso: ./deploy-images.sh [ambiente]

set -e

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configurações
BUCKET_NAME="brascann-assets"
SOURCE_DIR="./brascann_images"
DISTRIBUTION_ID="" # Adicione seu distribution ID aqui
REGION="us-east-1"

# Verificar se AWS CLI está instalado
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI não encontrado. Instale: https://aws.amazon.com/cli/${NC}"
    exit 1
fi

# Verificar se está logado na AWS
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ Não autenticado na AWS. Execute: aws configure${NC}"
    exit 1
fi

# Verificar se o diretório de imagens existe
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}❌ Diretório $SOURCE_DIR não encontrado${NC}"
    exit 1
fi

echo -e "${GREEN}🚀 Iniciando deploy de imagens...${NC}\n"

# 1. Criar bucket se não existir
echo -e "${YELLOW}📦 Verificando bucket S3...${NC}"
if ! aws s3 ls "s3://$BUCKET_NAME" 2>/dev/null; then
    echo "Criando bucket $BUCKET_NAME..."
    aws s3 mb "s3://$BUCKET_NAME" --region "$REGION"
    
    # Configurar versionamento
    aws s3api put-bucket-versioning \
        --bucket "$BUCKET_NAME" \
        --versioning-configuration Status=Enabled
    
    echo -e "${GREEN}✅ Bucket criado com sucesso${NC}\n"
else
    echo -e "${GREEN}✅ Bucket já existe${NC}\n"
fi

# 2. Upload de imagens WebP
echo -e "${YELLOW}📤 Fazendo upload de imagens WebP...${NC}"
aws s3 sync "$SOURCE_DIR" "s3://$BUCKET_NAME/" \
    --cache-control "public, max-age=31536000, immutable" \
    --content-type "image/webp" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.webp" \
    --delete \
    --acl private

echo -e "${GREEN}✅ WebP enviado${NC}\n"

# 3. Upload de imagens PNG
echo -e "${YELLOW}📤 Fazendo upload de imagens PNG...${NC}"
aws s3 sync "$SOURCE_DIR" "s3://$BUCKET_NAME/" \
    --cache-control "public, max-age=31536000, immutable" \
    --content-type "image/png" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.png" \
    --acl private

echo -e "${GREEN}✅ PNG enviado${NC}\n"

# 4. Upload de imagens JPG/JPEG
echo -e "${YELLOW}📤 Fazendo upload de imagens JPG...${NC}"
aws s3 sync "$SOURCE_DIR" "s3://$BUCKET_NAME/" \
    --cache-control "public, max-age=31536000, immutable" \
    --content-type "image/jpeg" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.jpg" \
    --include "*.jpeg" \
    --acl private

echo -e "${GREEN}✅ JPG enviado${NC}\n"

# 5. Listar arquivos enviados
echo -e "${YELLOW}📋 Arquivos no bucket:${NC}"
aws s3 ls "s3://$BUCKET_NAME/" --recursive --human-readable --summarize

# 6. Invalidar cache do CloudFront (se configurado)
if [ -n "$DISTRIBUTION_ID" ]; then
    echo -e "\n${YELLOW}🔄 Invalidando cache do CloudFront...${NC}"
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id "$DISTRIBUTION_ID" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    echo -e "${GREEN}✅ Invalidação criada: $INVALIDATION_ID${NC}"
    echo "Aguarde 3-5 minutos para propagação completa"
else
    echo -e "\n${YELLOW}⚠️  DISTRIBUTION_ID não configurado. Pulando invalidação do CloudFront.${NC}"
    echo "Adicione o DISTRIBUTION_ID no início deste script."
fi

# 7. Obter URL do bucket
BUCKET_URL="https://$BUCKET_NAME.s3.$REGION.amazonaws.com"
echo -e "\n${GREEN}✨ Deploy concluído com sucesso!${NC}"
echo -e "\n📍 URLs:"
echo -e "   S3 URL: $BUCKET_URL"
if [ -n "$DISTRIBUTION_ID" ]; then
    CF_DOMAIN=$(aws cloudfront get-distribution --id "$DISTRIBUTION_ID" --query 'Distribution.DomainName' --output text)
    echo -e "   CloudFront URL: https://$CF_DOMAIN"
fi

echo -e "\n${YELLOW}⚠️  Próximos passos:${NC}"
echo "1. Configure o DISTRIBUTION_ID neste script (se ainda não fez)"
echo "2. Atualize js/config.js com a URL do CloudFront"
echo "3. Teste a aplicação"
