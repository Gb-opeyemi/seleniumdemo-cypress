/// <reference types="cypress" />
describe('Test Input Forms', ()=>{
    before (()=> {
            cy.visit('/')
            cy.fixture('elementMapper').then((em)=>{
            cy.clickAnElement(em.popup)    
            cy.clickAnElement(em.startPractisingBtn)
            cy.clickAnElement(em.simpleFormDemo)
        })
    })

    it('Clicks on Start Practising and Select Simple Form Demo', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.clickAnElement(em.startPractisingBtn)
            cy.clickAnElement(em.simpleFormDemo)
        })
    })

    it('Enter Message and Show Message', ()=>{
    cy.fixture('elementMapper').then((em)=>{
        cy.typeSomeText(em.enterMessage, em.message)
        cy.clickAnElement(em.showMessageBtn)
        })
    })

    it('Verify Message Entered', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.verifyText(em.displayMessage, em.message)
            })
        })

    it.skip('Sum Two Numbers', ()=>{
        cy.fixture('elementMapper').then((em)=>{
            cy.typeSomeText(em.enterA, em.valueA)
            cy.typeSomeText(em.enterB, em.valueB)
            cy.clickAnElement(em.getTotalBtn)
            cy.verifyText(em.total, "15")
                })
            })

})