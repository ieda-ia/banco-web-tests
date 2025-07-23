describe('Transferencias', () => {
    beforeEach(()=>{
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })
    it('Deve transferir quando informo dados e valor validos', () =>{
        // Act
        cy.realizarTransferencia('Maria', 'João', '11')
       
        //Assert
        cy.verificarMensagensNoToast('Transferência realizada!')
    })

    it('Deve apresentar Erro quando tentar transferir mais que 5 mil sem o token', () =>{
        // Act    
        cy.realizarTransferencia('Maria', 'João', '6000')

        //Assert
        cy.verificarMensagensNoToast('Saldo insuficiente para realizar a transferência.')
    })
})