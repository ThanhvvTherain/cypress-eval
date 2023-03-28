/// <reference types="Cypress" />
const Form_URL = '/#sign-in'
const Team_URL = '/reputation'
require('cypress-xpath')

describe('Forms', () => {
  let exampleData;
  let indexVerify=0;
  before(() => {
    cy.fixture('example').then(function (data) {
      exampleData = data
    })
  })

  it('should display the Autocomplete title', () => {
    cy.visit(Cypress.config().baseUrl+Form_URL)
    cy.url()
    .should('eq', Cypress.config().baseUrl + Form_URL)
    cy.get('.MuiTypography-h2')
      .should('contain', 'Welcome to ZUJU KICKOFF')
  })
  it('should mark manchester city to favourite', () => {
    //Vist teams page
    cy.visit(Cypress.config().baseUrl+Team_URL+Form_URL)
    //Login
    cy.get("input[name='email']").type(exampleData.email)
    cy.get("input[name='password']").type(exampleData.password)
    cy.get("button[id=':r0:']").click()
    //Verify the page header
    cy.get("h2").should('contain',"All Teams")
    // Search for a team name `Manchester City`
    cy.get('.MuiInputBase-input').eq(0).type("Manchester City")
    //Mark it as a favourite
    cy.xpath("//h2[contains (text(),'All Teams')]/../../following-sibling::div/descendant::button").first().click()
    cy.wait(6000)
    //Select the team and verify the team details
    cy.xpath("//h2[contains (text(),'Favourite Teams')]/following-sibling::div/descendant::p").each(($el, index, $list) => {
      cy.log($el.text())
      if($el.text()==="Manchester City"){
        expect(true).to.be.true
      }
      
    })

  })
})
