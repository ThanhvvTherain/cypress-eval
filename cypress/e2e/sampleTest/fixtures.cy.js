/// <reference types="Cypress" />
const Form_URL = '/#sign-in'
const Fixtures_URL = '/fixtures'
require('cypress-xpath')

describe('test for home page', () => {
  let exampleData;
  before(() => {
    cy.visit(Cypress.config().baseUrl+Fixtures_URL+Form_URL)
    cy.get("input[name='email']").type("zujutest+automation@gmail.com")
    cy.get("input[name='password']").type("TestAuto123")
    cy.get("button[id=':r0:']").click()
    cy.wait(5000)
    
  })

  it('should display the matches base on 20th of calender selected', () => {
   //click calender
   cy.wait(5000)
    cy.xpath("//p[contains (text(),'2023')]/../..").click()
    cy.wait(2000)
   //tick on the 20th date of march
   cy.xpath("//button[contains (text(),'20')]").click()
   cy.wait(6000)
    // verrify the matches filter from 20th to current date
    cy.xpath("//p[contains (text(),'2023')]/../../../../following-sibling::div/descendant::h3").eq(2).should('contain',"20")
  })

})
