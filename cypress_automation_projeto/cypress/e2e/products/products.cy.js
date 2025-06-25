describe("Testes de Produtos", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });

  it("Deve adicionar um produto ao carrinho", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("Deve remover um produto do carrinho", () => {
    cy.get(".btn_primary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get(".btn_secondary.btn_inventory").first().click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Deve visualizar os detalhes de um produto", () => {
    cy.get(".inventory_item_name").first().click();
    cy.url().should("include", "/inventory-item.html");
    cy.get(".inventory_details_name").should("be.visible");
  });
});

