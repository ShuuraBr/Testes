describe('Login e Logout', () => {
  it('Deve ser capaz de fazer login e logout com sucesso', () => {
    // Usando o comando para login
    cy.login('standard_user', 'secret_sauce');

    // Logout
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('not.include', '/inventory.html');
  });

  it('Deve exibir mensagem de erro para credenciais inválidas', () => {
    cy.visit('/');
    // Usando seletores data-test para maior robustez
    cy.get('[data-test="username"]').type('user_invalido');
    cy.get('[data-test="password"]').type('senha_invalida');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});