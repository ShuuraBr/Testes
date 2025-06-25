describe('Login e Logout', () => {
  it('Deve ser capaz de fazer login e logout com sucesso', () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', '/')
  })

  it('Deve exibir mensagem de erro para credenciais inválidas', () => {
    cy.visit('/')
    cy.get('#user-name').type('user_invalido')
    cy.get('#password').type('senha_invalida')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })
})

