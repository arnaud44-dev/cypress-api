/// <reference types="cypress" />

describe('Testing Google Search', () => {

    // To Pass the Test Case 1 

    it('I can search for Valid Content on Google', () => {

         cy.visit('https://www.google.com');
         cy.get("input[title='Search']").type('Cypress').type('{enter}');
         cy.contains('https://www.cypress.io'); 

    });

    // To Fail the Test Case 2

    it('I can navigate to Wrong URL’', () => {

         cy.visit('http://localhost:8080');
         cy.get("input[title='Search']").type('Cypress').type('{enter}');
         cy.contains('https://www.cypress.io'); 

    });

});
