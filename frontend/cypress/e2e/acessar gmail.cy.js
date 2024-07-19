// Importando o módulo Puppeteer
const puppeteer = require('puppeteer');

// Função assíncrona para automatizar o navegador
(async () => {
  // Iniciando uma nova instância do navegador
  const browser = await puppeteer.launch();

  // Abrindo uma nova página
  const page = await browser.newPage();

  try {
    // Acessando a URL do Gmail
    await page.goto('https://www.gmail.com');

    // Esperando um pequeno intervalo para garantir que a página esteja totalmente carregada
    await page.waitForTimeout(2000);

    // Usando o comando document.querySelectorAll para identificar todos os elementos na página
    const allComponents = await page.evaluate(() => {
      const components = document.querySelectorAll('*');
      const componentsArray = Array.from(components);
      return componentsArray.map(component => ({
        tagName: component.tagName,
        id: component.id,
        className: component.className,
        textContent: component.textContent,
        action: '', // Adicione aqui a lógica para determinar a ação do componente (click, tap, hover)
        description: '', // Adicione aqui a lógica para descrever o componente
        find: { // Adicione aqui a lógica para determinar a localização do componente (ID, CSS, XPath)
          id: '',
          css: '',
          selector: '',
          xpath: '',
        },
        type: '', // Adicione aqui a lógica para determinar o tipo do componente (botão, texto, imagem, etc.)
      }));
    });

    // Imprimindo os componentes identificados no console em formato JSON
    console.log(JSON.stringify(allComponents, null, 2));
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  } finally {
    // Fechando o navegador
    await browser.close();
  }
})();
