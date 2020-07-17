/// <reference types="cypress" />

const mainPage = {
  signinBtn : '[data-tracking-control-name="guest_homepage-basic_nav-header-signin"]'
}

const loginPage = {
  emailOrPhoneInput : 'input#username',
  passwordInput : 'input#password',
  loginBtn : 'button[data-litms-control-urn="login-submit"]'
}

const homePage = {
  header : {
    searchInput : '[class^="search"] input'
  } 
}

const nameToSearch = "Daniel de Campos Barbosa"

context('Actions', () => {
  before(() => {
    cy.visit('https://www.linkedin.com/')
  })

  it('login', () => {    
    cy.get(mainPage.signinBtn).click()
    cy.get(loginPage.emailOrPhoneInput).type(Cypress.env('user'))
    cy.get(loginPage.passwordInput).type(Cypress.env('password'))
    cy.get(loginPage.loginBtn).click()

    cy.get(homePage.header.searchInput).type(`${nameToSearch}{enter}`)
  })
})
