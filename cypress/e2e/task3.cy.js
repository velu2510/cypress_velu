describe('Automation', () => {
    it.skip('test3', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('incorrectPassword')
        cy.get('button#submit').click()
        cy.get('div#error').should('be.visible')
        cy.get('div#error').should('have.text','Your password is invalid!')
        
    })
})