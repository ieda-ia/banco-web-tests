Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionandoOpcaoNaCombobox('conta-origem', contaOrigem)       
    cy.selecionandoOpcaoNaCombobox('conta-destino', contaDestino)   
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})
