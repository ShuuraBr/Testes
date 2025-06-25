describe("Testes de Produtos", () => {
  beforeEach(() => {
    // Usando o comando personalizado para evitar repetição de código
    cy.login("standard_user", "secret_sauce");
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

  // NOVO TESTE ADICIONADO
  it("Deve ordenar os produtos por nome (Z a A)", () => {
    // Seleciona a opção de ordenação 'Name (Z to A)'
    cy.get('[data-test="product_sort_container"]').select('za');

    // Pega o nome de todos os produtos na lista
    cy.get(".inventory_item_name").then($products => {
      // Extrai o texto de cada nome e remove espaços em branco
      const productNames = $products.map((index, el) => Cypress.$(el).text().trim()).get();
      
      // Cria uma cópia da lista e ordena em ordem decrescente (Z-A)
      const sortedProductNames = [...productNames].sort().reverse();
      
      // Compara a lista da tela com a lista ordenada para garantir que são iguais
      expect(productNames).to.deep.equal(sortedProductNames);
    });
  });
});