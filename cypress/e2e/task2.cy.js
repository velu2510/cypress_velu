describe('login',()=>{
    it.skip('validate test case 2',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('incorrectUser')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.get('div#error').should('be.visible')
        cy.get('div#error').should('have.text','Your username is invalid!')
        


        
    })
})