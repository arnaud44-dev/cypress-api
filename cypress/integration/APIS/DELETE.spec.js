/// <reference types="cypress" />

describe('Testing API DELETE Endpoints Using Cypress', () => {      

    it('Test DELETE Request', () => {
          cy.request({
                    method : 'DELETE',
                    url: 'http://localhost:3000/api/post/2'
                    }).then((response) => {
                      expect(response.body).to.be.empty;
          })	
    })
 
})
