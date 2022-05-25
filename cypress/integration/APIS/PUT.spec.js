/// <reference types="cypress" />

describe('Testing API Endpoints Using Cypress', () => {

    it('Test PUT Request', () => {
          cy.request({
                  method: 'PUT',
                  url: 'http://localhost:3000/api/posts/2',
                  body: { 
                     'id': 2,
                     'title' : 'Test Automation'
                  }
          }).then((response) => { 
                  expect(response.body).has.property('title', 'Test Automation'); 
          })          
    })     
})
