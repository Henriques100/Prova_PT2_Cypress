/// <reference> types="cypress"/>



describe('Criando cenário de teste ao site CNN BRASIL',()=> {

  it.skip('Adicionar usuário com sucesso', ()=> {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    //Apertando botão Bank Manager Login
    cy.get(':nth-child(3) > .btn').click()
    //Apertando botão Add Customer
    cy.get('[ng-class="btnClass1"]').click()
    //Login usuário "Primeiro Nome"
    cy.get('form.ng-pristine > :nth-child(1)').type('Rafael')
    //Login usuário "Último nome"
    cy.get(':nth-child(2) > .form-control').type('Centenário')
    //Código postal
    cy.get(':nth-child(3) > .form-control').type('118-723180')
    // Adicionar customizador com sucesso
    cy.get('form.ng-dirty > .btn').click()
  
  })

  it.skip('Adicionar usuário com insucesso', ()=> {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    //Apertando botão Bank Manager Login
    cy.get(':nth-child(3) > .btn').click()
    //Apertando botão Add Customer
    cy.get('[ng-class="btnClass1"]').click()
    //Login usuário "Primeiro Nome"
    cy.get('form.ng-pristine > :nth-child(1)').type('Rafael')
    //Login usuário "Último nome"
    cy.get(':nth-child(2) > .form-control').type('Centenário')
    //Código postal
    cy.get(':nth-child(3) > .form-control').clear()
    // Adicionar customizador com insucesso
    cy.get('form.ng-dirty > .btn').click()

  })

  it('Adicionar usuário com insucesso', ()=> {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    //Apertando botão Bank Manager Login
    cy.get(':nth-child(3) > .btn').click()
    //Apertando botão Customer
    cy.get('[ng-class="btnClass3"]').click()
    //Apertando o botão delete, para remover um usuário
    cy.get(':nth-child(1) > :nth-child(5) > button').click()

  })
}) 