Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credenciais_validas => {
        cy.get('#username').click().type(credenciais_validas.valida.usuario)
        cy.get('#senha').click().type(credenciais_validas.valida.senha)
      })      
   
      cy.contains('button', 'Entrar').click() 
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais_invalidas => {
      cy.get('#username').click().type(credenciais_invalidas.invalida.usuario)
      cy.get('#senha').click().type(credenciais_invalidas.invalida.senha)
    })
      cy.contains('button', 'Entrar').click()
})
