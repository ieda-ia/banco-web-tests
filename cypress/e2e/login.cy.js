describe('Login', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('http://localhost:4000')
  })
  it('Login com dados VÁLIDOS deve permitir entrada no sistema', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Asserts
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados INVÁLIDOS deve permitir entrada no sistema', () => {
    //Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    //Asserts
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})