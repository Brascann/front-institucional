// Configuração de CDN e URLs de assets
const CONFIG = {
  // URL base do CloudFront (adicione sua URL após o deploy)
  CDN_URL: 'https://seu-distribution-id.cloudfront.net',
  
  // Fallback para desenvolvimento local
  LOCAL_ASSETS: './brascann_images',
  
  // Ambiente (altere para 'production' quando fizer deploy)
  ENV: 'development',
  
  // Função helper para gerar URLs de imagens
  getImageUrl: function(imagePath) {
    if (this.ENV === 'production') {
      return `${this.CDN_URL}/${imagePath}`;
    }
    return `${this.LOCAL_ASSETS}/${imagePath}`;
  },
  
  // Função para gerar srcset responsivo
  getResponsiveSrcset: function(baseName, sizes = [600, 1200, 1600]) {
    const ext = baseName.split('.').pop();
    const name = baseName.replace(`.${ext}`, '');
    
    return sizes.map(size => 
      `${this.getImageUrl(`${name}_${size}.${ext}`)} ${size}w`
    ).join(', ');
  }
};

// Exportar para uso global
window.APP_CONFIG = CONFIG;
