Cypress.Commands.add('verificarMensagensNoToast', mensagem => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selecionandoOpcaoNaCombobox', (labelDoCampo, opcao) => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click()
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click()
})