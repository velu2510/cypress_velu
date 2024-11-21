describe('login',()=>{
    it.skip('validate test case 1',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
        cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
        cy.get('[class*=*has-very-dark-gray-background-color*]').should('be.visible')
    })
})
