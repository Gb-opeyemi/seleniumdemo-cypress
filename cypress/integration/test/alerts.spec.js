/// <reference types="cypress" />
describe('Test JavaScript Alerts', ()=>{
    it('Launch the site', ()=>{
         cy.visit('/')
    })

    it('Clicks on Start Practising', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.popup)  
        cy.clickAnElement(em.startPractisingBtn)  
        cy.clickAnElement(em.jsAlertBtn)
        })
    })

    it('Handling JS Alert Box - Validate Alert Text and Click OK', ()=>{
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.alertClickMeBtn)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
        cy.on('window:confirm', () => true);
        })
    })

    it('Handling JS Confirm Box - Validate Confirm Text and Click OK', () => {
        cy.fixture('elementMapper').then((em)=>{
        cy.clickAnElement(em.confirmClickMeBtn)
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`Press a button!`)
        })
        cy.on('window:confirm', () => true);
        cy.verifyText(em.confirmTextElm , em.confirmTextOK)
        })
    })

    it('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
        cy.fixture('elementMapper').then((em)=>{
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns(em.promptText)
            cy.clickAnElement(em.promptClickMeBtn)
        })
        cy.verifyText(em.promptTextElm , em.promptText)
        })
    })
})