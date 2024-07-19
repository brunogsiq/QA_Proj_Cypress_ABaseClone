const elementsMapping = {
    "Coment": "Exemplo de estrutura para mapeamento de propriedades de um componente/elemento",
    "Page": "{{URL-Encontrada no sitemap.xml}}",
    "Elements": {
        "name_element": {
            "properties": {
                "Action": "string",
                "Description": "string",
                "Find": {
                    "id": "#string",
                    "css": "string",
                    "selector": "string",
                    "xpath": "string"
                },
                "Type": "string"
            }
        },
        "Botão_login": {
            "properties": {
                "Action": "click",
                "Description": "Iniciar_Login",
                "Find": {
                    "id": "#btn-login",
                    "css": ".exemplo",
                    "selector": "#btn-login",
                    "xpath": "//*[@id='btn-login']"
                },
                "Type": "btn"
            }
        }
    },
    "ExampleType": [
        "btn",
        "placeholder",
        "Wrap",
        "Texto",
        "Imagens",
        "Links",
        "Forms",
        "box",
        "table",
        "Arrays",
        "Divs",
        "mídia",
        "Frames",
        "IFrames",
        "header",
        "footer",
        "nav",
        "span",
        "map",
        "area",
        "canvas",
        "SVG",
        "drawer"
    ],
    "Action": [
        "click",
        "tap",
        "hover"
    ]
};

export default elementsMapping;


module.exports = elementsMapping;
