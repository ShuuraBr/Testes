# Projeto de Automação Web com Cypress

Este projeto contém testes automatizados para o site SauceDemo usando Cypress.

## Estrutura do Projeto

```
cypress_automation/
├── cypress/
│   ├── e2e/
│   │   ├── login/
│   │   │   └── login_logout.cy.js
│   │   ├── products/
│   │   │   └── products.cy.js
│   │   ├── cart/
│   │   │   └── cart.cy.js
│   │   └── checkout/
│   │       └── checkout.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

## Testes Implementados

### 1. Login e Logout (login_logout.cy.js)
- Teste de login com credenciais válidas
- Teste de logout
- Teste de login com credenciais inválidas

### 2. Produtos (products.cy.js)
- Adicionar produto ao carrinho
- Remover produto do carrinho
- Visualizar detalhes do produto

### 3. Carrinho (cart.cy.js)
- Adicionar múltiplos produtos ao carrinho
- Remover produtos do carrinho
- Continuar comprando após visualizar o carrinho

### 4. Checkout (checkout.cy.js)
- Finalizar compra com informações válidas
- Cancelar checkout

## Como Executar

### Pré-requisitos
- Node.js instalado
- npm instalado

### Instalação
```bash
npm install
```

### Executar Testes
```bash
# Executar todos os testes em modo headless
npx cypress run

# Abrir interface gráfica do Cypress
npx cypress open
```

## Configuração

O arquivo `cypress.config.js` está configurado para:
- URL base: https://www.saucedemo.com/v1/
- Testes E2E

## Comandos Personalizados

O arquivo `cypress/support/commands.js` contém um comando personalizado:
- `cy.login(username, password)`: Realiza login no sistema

## Resultados dos Testes

Todos os testes foram executados com sucesso:
- ✔ checkout/checkout.cy.js (2 testes)
- ✔ login/login_logout.cy.js (2 testes)  
- ✔ products/products.cy.js (3 testes)
- ✔ cart/cart.cy.js (3 testes)

Total: 10 testes passaram com sucesso.

