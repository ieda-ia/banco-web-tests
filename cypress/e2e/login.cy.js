describe('Login', () => {
  beforeEach(() =>{
    //Arrange
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })
  it('Login com dados VÁLIDOS deve permitir entrada no sistema', () => {
      //Act      
      cy.fazerLoginComCredenciaisValidas()
      cy.screenshot('apos-clicar-botao-entrar')

      //Asserts
      cy.contains('h4', 'Realizar Transferência').should('be.visible')
    
  })

  it('Login com dados INVÁLIDOS Não deve permitir entrada no sistema', () => {
    //Act
    cy.fazerLoginComCredenciaisInvalidas()

    //Asserts    
    cy.verificarMensagensNoToast('Erro no login. Tente novamente.')
  })
})