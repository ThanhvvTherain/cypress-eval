/// <reference types="Cypress" />
const Form_URL = '/#sign-in'
const Team_URL = '/reputation'
require('cypress-xpath')

describe('test for home page', () => {
  let exampleData;
  before(() => {
    cy.visit(Cypress.config().baseUrl+Form_URL)
    cy.get("input[name='email']").type("zujutest+automation@gmail.com")
    cy.get("input[name='password']").type("TestAuto123")
    cy.get("button[id=':r0:']").click()
    cy.wait(5000)
  })

  it('should display the matches base on upcoming selected item', () => {
   //tick on item
    cy.xpath("//h2[contains (text(),'Upcoming for you')]/following-sibling::div/descendant::span").eq(4).click()
    cy.wait(5000)
   //verify page load ressult
    cy.get("h2").should('contain',"All matches")
  })
  it('should navigate to specific match when click on match', () => {
    //tick on item
    cy.xpath("//h2[contains (text(),'Upcoming for you')]/following-sibling::div/descendant::span").eq(1).click()
    cy.wait(5000)
    //click on specific match
    cy.xpath("//h2[contains (text(),'All matches')]/following-sibling::div/div/div/div/div[2]/div").first().click()
    //verify navigation
    cy.url()
    .should('contain',"events")
  })
})
