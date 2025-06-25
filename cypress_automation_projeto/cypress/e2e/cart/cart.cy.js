describe("Testes de Carrinho", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });

  it("Deve adicionar múltiplos produtos ao carrinho", () => {
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    cy.get(".btn_primary.btn_inventory").eq(1).click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });

  it("Deve remover produtos do carrinho a partir da página do carrinho", () => {
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    cy.get(".btn_primary.btn_inventory").eq(1).click();
    cy.get(".shopping_cart_badge").should("contain", "2");
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".btn_secondary").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("Deve continuar comprando após visualizar o carrinho", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".btn_secondary").contains("Continue Shopping").click();
    cy.url().should("include", "/inventory.html");
  });
});

