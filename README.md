# BrasCann - Front Institucional (Next.js)

Site institucional da BrasCann desenvolvido com Next.js 14, React 18 e TypeScript.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript tipado
- **CSS Modules** - Estilização com escopo de componente

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🔧 Instalação

1. Instale as dependências:

```bash
npm install
# ou
yarn install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/              # App Router do Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Team.tsx
│   │   ├── Products.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   └── config/           # Configurações
│       └── index.ts      # Config de assets/CDN
├── public/
│   └── brascann_images/  # Imagens estáticas
├── next.config.js        # Configuração do Next.js
├── tsconfig.json         # Configuração TypeScript
└── package.json          # Dependências
```

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 🎨 Componentes

- **Header**: Navegação fixa no topo
- **Hero**: Seção principal com imagem de fundo
- **About**: Informações sobre a empresa (essência, objetivo, compromisso)
- **Team**: Apresentação da equipe
- **Products**: Lista de produtos
- **Newsletter**: Formulário de inscrição
- **Footer**: Rodapé com links e copyright

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Faça push do código para o GitHub
2. Importe o projeto na Vercel
3. Configure as variáveis de ambiente (se necessário)
4. Deploy automático!

### AWS (CloudFront + S3)

1. Build do projeto:
```bash
npm run build
```

2. O output estará na pasta `.next`
3. Configure o CloudFront com as imagens no S3
4. Adicione a variável `NEXT_PUBLIC_CDN_URL` com a URL do CloudFront

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL do CDN (opcional, apenas para produção)
NEXT_PUBLIC_CDN_URL=https://seu-distribution-id.cloudfront.net
```

## 📝 Notas de Migração

Este projeto foi migrado de HTML/CSS/JS puro para Next.js. Principais mudanças:

- ✅ Componentes HTML convertidos para React
- ✅ CSS mantido em arquivo global (pode ser modularizado futuramente)
- ✅ Carregamento dinâmico substituído por importações estáticas
- ✅ Formulário de newsletter com estado React
- ✅ TypeScript para type safety
- ✅ Suporte a imagens otimizadas com Next.js Image

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

© 2026 BRASCANN Farmacêutica LTDA - Todos os direitos reservados.
