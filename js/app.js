// Função para carregar componentes HTML
async function loadComponent(componentName, targetId) {
  try {
    const response = await fetch(`components/${componentName}.html`);
    if (!response.ok) throw new Error(`Erro ao carregar ${componentName}`);
    const html = await response.text();
    document.getElementById(targetId).innerHTML = html;
  } catch (error) {
    console.error(`Erro ao carregar componente ${componentName}:`, error);
  }
}

// Carregar todos os componentes quando a página carregar
document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('header', 'header-container');
  await loadComponent('hero', 'hero-container');
  await loadComponent('about', 'about-container');
  await loadComponent('team', 'team-container');
  await loadComponent('testimonials', 'testimonials-container');
  await loadComponent('products', 'products-container');
  await loadComponent('newsletter', 'newsletter-container');
  await loadComponent('footer', 'footer-container');
});
