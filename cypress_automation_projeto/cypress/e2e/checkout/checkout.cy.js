describe("Testes de Checkout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".btn_primary.btn_inventory").first().click();
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
    cy.get(".cart_button").click();
    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain", "THANK YOU FOR YOUR ORDER");
  });

  it("Deve cancelar o checkout e retornar para o carrinho", () => {
    cy.get(".cart_cancel_link").click();
    cy.url().should("include", "/cart.html");
  });
});

