describe("Testes de Checkout", () => {
  const productName = "Sauce Labs Backpack"; // Nome do produto para validação

  beforeEach(() => {
    // 1. Fazer login
    cy.login("standard_user", "secret_sauce");

    // 2. Preparar o cenário: adicionar o item específico e ir para o checkout
    cy.contains(".inventory_item_name", productName)
      .parents(".inventory_item")
      .find(".btn_primary.btn_inventory")
      .click();

    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".checkout_button").click();
    cy.url().should("include", "/checkout-step-one.html");
  });

  it("Deve preencher as informações do checkout e finalizar a compra", () => {
    cy.get("#first-name").type("Teste");
    cy.get("#last-name").type("Sobrenome");
    cy.get("#postal-code").type("12345");
    cy.get(".cart_button").click();
    cy.url().should("include", "/checkout-step-two.html");

    // VALIDAÇÃO ADICIONADA
    // Valida se o item no resumo da compra está correto
    cy.get(".inventory_item_name").should("contain", productName);

    cy.get(".cart_button").click();
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
  });

  it("Deve cancelar o checkout e retornar para o carrinho", () => {
    cy.get(".cart_cancel_link").click();
    cy.url().should("include", "/cart.html");
  });
});