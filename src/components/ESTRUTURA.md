# Estrutura de Componentes

Este projeto utiliza uma arquitetura modular onde cada componente possui sua própria pasta com seus estilos específicos.

## 📁 Estrutura

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Header/
    │   ├── Header.tsx       # Componente Header
    │   └── Header.module.css # Estilos específicos do Header
    ├── Hero/
    │   ├── Hero.tsx
    │   └── Hero.module.css
    ├── About/
    │   ├── About.tsx
    │   └── About.module.css
    ├── Products/
    │   ├── Products.tsx
    │   └── Products.module.css
    ├── Team/
    │   ├── Team.tsx
    │   └── Team.module.css
    ├── Newsletter/
    │   ├── Newsletter.tsx
    │   └── Newsletter.module.css
    └── Footer/
        ├── Footer.tsx
        └── Footer.module.css
```

## 🎨 Organização de Estilos

### Estilos Globais (`globals.css`)
Contém apenas estilos compartilhados entre todos os componentes:
- Variáveis CSS (cores, fontes, etc.)
- Reset e estilos base (html, body, *)
- Classes utilitárias (.container, .white, .clear-green, .muted, .card)
- Estilos de tipografia global (h2, h3, h4)
- Media queries globais

### Estilos de Componente (`.module.css`)
Cada componente possui seu próprio arquivo CSS Module contendo:
- Estilos específicos do componente
- Variantes do componente
- Media queries específicas do componente

## 📝 Uso de CSS Modules

### Importação
```tsx
import styles from './ComponentName.module.css'
```

### Aplicação
```tsx
<div className={styles.componentClass}>
  {/* conteúdo */}
</div>
```

### Classes Combinadas
```tsx
<div className={`${styles.localClass} globalClass`}>
  {/* Combina classe do módulo com classe global */}
</div>
```

## ✨ Vantagens desta Estrutura

1. **Modularidade**: Cada componente é independente e autocontido
2. **Manutenibilidade**: Fácil localizar e modificar estilos específicos
3. **Escalabilidade**: Adicionar novos componentes sem afetar os existentes
4. **Escopo de CSS**: CSS Modules previne conflitos de nomes de classes
5. **Performance**: Apenas os estilos necessários são carregados
6. **Organização**: Código e estilo ficam juntos na mesma pasta

## 🔧 Adicionando Novo Componente

1. Criar pasta para o componente em `src/components/`
2. Criar arquivo `.tsx` do componente
3. Criar arquivo `.module.css` com estilos específicos
4. Importar e usar classes do CSS Module no componente
5. Usar classes globais do `globals.css` quando apropriado

Exemplo:
```bash
src/components/NewComponent/
├── NewComponent.tsx
└── NewComponent.module.css
```

## 📌 Classes Globais Disponíveis

- `.container` - Container com max-width centralizado
- `.white` - Background branco
- `.clear-green` - Background verde claro
- `.muted` - Cor de texto muted
- `.card` - Card com sombra e bordas arredondadas
- `.two-col` - Layout de duas colunas

## 🎯 Boas Práticas

1. Use CSS Modules para estilos específicos do componente
2. Use classes globais para estilos compartilhados
3. Mantenha variáveis CSS em `globals.css`
4. Siga a convenção camelCase para nomes de classes em CSS Modules
5. Combine classes quando necessário: `${styles.local} global`
