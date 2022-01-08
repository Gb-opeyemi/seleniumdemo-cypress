/// <reference types="cypress" />
describe('Test Select From Dropdown List', ()=>{
    it('Launch the site', ()=>{
         cy.visit('/')
    })

    it('Clicks on Start Practising', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.popup)  
        cy.clickAnElement(em.startPractisingBtn)  
        cy.clickAnElement(em.selectDropdown)
        })
    })

    it('Select a Day from the Dropdown', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.get(em.selectDayDropddown).select(em.dayDropdownOption[1]).should('have.value', em.dayDropdownValue[1])
        cy.verifyText(em.selectedValue , em.dayDropdownValue[1])
        })
    })
})