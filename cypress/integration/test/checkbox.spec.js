/// <reference types="cypress" />
describe('Test Checkbox Demo', ()=>{
    //before (()=> {
    it('Launch the site', ()=>{
         cy.visit('/')
    })

    it('Clicks on Start Practising', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.popup)  
        cy.clickAnElement(em.startPractisingBtn)  
        cy.clickAnElement(em.checkBoxDemo)
        })
    })

    it('Clicks on this checkbox', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.checkTheBox)
        cy.verifyText(em.successMsgField , em.successMsg)
        })
    })

    it('Check All Boxes and Verify The Text Changed', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.option1)
        cy.clickAnElement(em.checkAllBtn)
        cy.get('#check1').should('have.value', 'Uncheck All')
        })
    })

})