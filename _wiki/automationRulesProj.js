/*
        1 - Dependências p/ Instalar:
                1.1 - npm install -D cypress-wait-until
                Após:
                        Add this line to your project's cypress/support/commands.js:
                        import 'cypress-wait-until';
                        and add in cypress/support/e2e.js:
                        require('cypress-wait-until')
                Ex:
                        cy.waitUntil(() =>
                        cy.get('')
                                .should("be.visible"));

                1.2 - npm install -D cypress-iframe
                Após, será necessário inserir em cypress/support/commands.js, inserir:
                import 'cypress-iframe'; or require('cypress-iframe');

        2. - Os Testes por padrão deverão ser escritos da seguinte forma:
                N° - Sw - Tela - Objetivo do Teste - Teste realizado
                Ex:
                        01 - Web - Tela de Processamento - Validar processamento de taxa - Dados de datas e matriz válidos e existentes.

        3 - Os campos a seguir deverão possuir as seguintes validações:
                Alertas:
                        Visível
                        Tag html ou classe
                        Atributo
                        Css
                        Texto
                        Tempo de apresentação
                        Não visível
                Âncoras e Botões:
                        Visível
                        Habilitado ou não
                        Tag html ou classe
                        Atributo
                        Css
                        Texto
                        Texto css
                Listas:
                        Visível
                        Tag html ou classe
                        Atributo
                        Css
                        Texto
                        Texto css
                Checkbox:
                        Visível
                        Atributo check
                        Atributo mensagem
                        Css
                Campos datas:
                        Visível
                        Tag html ou classe
                        Atributo formcontrolname "begindate" ou "enddate"
                        ***Atributo placeholder "00/00/0000"
                        ***Atributo tipo
                        Texto
                Campo matriz:
                        Visível
                        Tag html ou classe
                        Atributo formcontrolname "fiscalNumber"
                        Atributo placeholder "00.000.00/0000-00"
                        Atributo tipo
                        Texto
                Ícones e Imagem:
                        Visível
                        Atributo role="img"
                        css
                        Texto
                Textos:
                        Visível
                        Css
                        Texto
*/