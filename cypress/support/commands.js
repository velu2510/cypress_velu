// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const cypress = require("cypress")

// Cypress.Commands.add('login', (email, password) => { ... })
   Cypress.Commands.add('addingproducttocart',(product)=>{
    cy.get('#inventory_container .inventory_item').each(($results)=>{
    if($results.text().includes(product)){
        cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
    }
})
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />