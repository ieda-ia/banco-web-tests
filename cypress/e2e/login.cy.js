describe('Login', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })
  it('Login com dados VÁLIDOS deve permitir entrada no sistema', () => {
      //Act
      cy.fixture('credenciais').then(credenciais_validas => {
        cy.get('#username').click().type(credenciais_validas.valida.usuario)
        cy.get('#senha').click().type(credenciais_validas.valida.senha)
      })    
      
      cy.screenshot('apos-preencher-dados-validos')
      cy.contains('button', 'Entrar').click()   
      cy.screenshot('apos-clicar-botao-entrar')
      
      //Asserts
      cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

  it('Login com dados INVÁLIDOS deve permitir entrada no sistema', () => {
    //Act
    cy.fixture('credenciais').then(credenciais_invalidas => {
      cy.get('#username').click().type(credenciais_invalidas.invalida.usuario)
      cy.get('#senha').click().type(credenciais_invalidas.invalida.senha)
    })
      cy.contains('button', 'Entrar').click()

    //Asserts
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})