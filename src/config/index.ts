// Configuração de assets e CDN
export const config = {
  // URL base do CloudFront (adicione sua URL após o deploy)
  CDN_URL: process.env.NEXT_PUBLIC_CDN_URL || '',
  
  // Ambiente
  ENV: process.env.NODE_ENV || 'development',
  
  // Função helper para gerar URLs de imagens
  getImageUrl: function(imagePath: string): string {
    if (this.ENV === 'production' && this.CDN_URL) {
      return `${this.CDN_URL}/${imagePath}`
    }
    return `/brascann_images/${imagePath}`
  },
  
  // Função para gerar srcset responsivo
  getResponsiveSrcset: function(baseName: string, sizes: number[] = [600, 1200, 1600]): string {
    const ext = baseName.split('.').pop()
    const name = baseName.replace(`.${ext}`, '')
    
    return sizes.map(size => 
      `${this.getImageUrl(`${name}_${size}.${ext}`)} ${size}w`
    ).join(', ')
  }
}

export default config
