# 🌟 Guia de Instalação e Validação de Testes com Cypress 🌟

## 1. 🚀 Dependências para Instalar:

### 1.1 ⏳ Cypress Wait Until
- **Instalação:**
  - npm install -D cypress-wait-until

- **Configuração:**
  - Adicione ao arquivo `cypress/support/commands.js`:
    - import 'cypress-wait-until';

- Adicione ao arquivo `cypress/support/e2e.js`:
    require('cypress-wait-until')

- **Exemplo de Uso:**
  - cy.waitUntil(() => cy.get('').should("be.visible"));

### 1.2 🌐 Cypress Iframe
- **Instalação:**
  - npm install -D cypress-iframe

- **Configuração:**
  - Adicione ao arquivo `cypress/support/commands.js`:
    - import 'cypress-iframe'; 
    - ou
    - require('cypress-iframe');

### 1.3 🎭 Faker JS
- **Instalação:**
  - npm install @faker-js/faker --save-dev

- **Exemplos de Uso:**
  - import { faker } from '@faker-js/faker';
  - const randomName = faker.name.fullName(); // Rowan Nikolaus
  - const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

## 2. ✍️ Padrão para Escrita de Testes:
- Os testes devem seguir o formato:
  - N° - Sw - Tela - Objetivo do Teste - Teste realizado
  - **Exemplo:**
    - 01 - Web - Tela de Processamento - Validar processamento de taxa - Dados de datas e matriz válidos e existentes.

## 3. 🔍 Validações para Campos:

### 🚨 Alertas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Tempo de apresentação**
- **Não visível**

### 🔗 Âncoras e Botões:
- **Visível**
- **Habilitado ou não**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Texto CSS**

### 📋 Listas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Texto CSS**

### ✅ Checkbox:
- **Visível**
- **Atributo check**
- **Atributo mensagem**
- **CSS**

### 📅 Campos Datas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo `formcontrolname` "begindate" ou "enddate"**
- **Atributo `placeholder` "00/00/0000"**
- **Atributo tipo**
- **Texto**

### 🏢 Campo Matriz:
- **Visível**
- **Tag HTML ou classe**
- **Atributo `formcontrolname` "fiscalNumber"**
- **Atributo `placeholder` "00.000.00/0000-00"**
- **Atributo tipo**
- **Texto**

### 🌟 Ícones e Imagem:
- **Visível**
- **Atributo `role="img"`**
- **CSS**
- **Texto**

### 📝 Textos:
- **Visível**
- **CSS**
- **Texto**

# 🌟 Guia de Instalação e Validação de Testes com Cypress 🌟

## 1. 🚀 Dependências para Instalar:

### 1.1 ⏳ Cypress Wait Until
- **Instalação:**
  - npm install -D cypress-wait-until

- **Configuração:**
  - Adicione ao arquivo `cypress/support/commands.js`:
    - import 'cypress-wait-until';
    - Adicione ao arquivo `cypress/support/e2e.js`:
    - require('cypress-wait-until')

- **Exemplo de Uso:**
  - cy.waitUntil(() => cy.get('').should("be.visible"));

### 1.2 🌐 Cypress Iframe
- **Instalação:**
  - npm install -D cypress-iframe
- **Configuração:**
  - Adicione ao arquivo `cypress/support/commands.js`:
    - import 'cypress-iframe';
    - ou
    - require('cypress-iframe');

### 1.3 🎭 Faker JS
- **Instalação:**
  - npm install @faker-js/faker --save-dev

- **Exemplos de Uso:**
  - import { faker } from '@faker-js/faker';
    - const randomName = faker.name.fullName(); // Rowan Nikolaus
    - const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

## 2. ✍️ Padrão para Escrita de Testes:
- Os testes devem seguir o formato:
  - N° - Sw - Tela - Objetivo do Teste - Teste realizado
- **Exemplo:**
  - 01 - Web - Tela de Processamento - Validar processamento de taxa - Dados de datas e matriz válidos e existentes.

## 3. 🔍 Validações para Campos:

### 🚨 Alertas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Tempo de apresentação**
- **Não visível**

### 🔗 Âncoras e Botões:
- **Visível**
- **Habilitado ou não**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Texto CSS**

### 📋 Listas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo**
- **CSS**
- **Texto**
- **Texto CSS**

### ✅ Checkbox:
- **Visível**
- **Atributo check**
- **Atributo mensagem**
- **CSS**

### 📅 Campos Datas:
- **Visível**
- **Tag HTML ou classe**
- **Atributo `formcontrolname` "begindate" ou "enddate"**
- **Atributo `placeholder` "00/00/0000"**
- **Atributo tipo**
- **Texto**

### 🏢 Campo Matriz:
- **Visível**
- **Tag HTML ou classe**
- **Atributo `formcontrolname` "fiscalNumber"**
- **Atributo `placeholder` "00.000.00/0000-00"**
- **Atributo tipo**
- **Texto**

### 🌟 Ícones e Imagem:
- **Visível**
- **Atributo `role="img"`**
- **CSS**
- **Texto**

### 📝 Textos:
- **Visível**
- **CSS**
- **Texto**
