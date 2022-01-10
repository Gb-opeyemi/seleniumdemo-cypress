Given ('I am on the Selenium Demo site', ()=> {
    cy.visit('/')
})
When ('I click on the {string}', (button)=> {
        cy.fixture('elementMapper').then((em)=>{
            switch(button){
                case "popup close button":
                    cy.clickAnElement(em.popup) 
                    break
                case "Start Practising button":
                    cy.clickAnElement(em.startPractisingBtn)
                    break
                case "Simple Form Demo button":
                    cy.clickAnElement(em.simpleFormDemo)
                    break
                case "Get Total button":
                    cy.clickAnElement(em.getTotalBtn)
            }
        
    })
})

And ('I insert value {string}', (typeText)=> {
        cy.fixture('elementMapper').then((em)=>{
            switch (typeText){
                case "a":
                    cy.typeSomeText(em.enterA, em.valueA)
                    break
                case "b":
                    cy.typeSomeText(em.enterB, em.valueB)
            }
        
            })
})


Then ('I should get the total of the two numbers', ()=> {
        cy.fixture('elementMapper').then((em)=>{
        cy.verifyText(em.total, "15")
            })
})