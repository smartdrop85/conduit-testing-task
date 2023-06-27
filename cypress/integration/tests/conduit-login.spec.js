import HomePage from '../../page-objects/pages/BasePage'

describe("Conduit Login", function() {
  beforeEach(function() {
    HomePage.loadHomePage()
  })

  it("should login with existing account", function() {
    HomePage.clickLogin()
    HomePage.checkLoginFromIsOpen()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    HomePage.submitLoginForm()
    cy.get('a[href="#/settings"]').contains('Settings')
  });

  it("should not login with invalid login and pass", function() {
    HomePage.clickLogin()
    HomePage.checkLoginFromIsOpen()
    cy.login('referferferf@erferfe.erf', 'erfersferferf')
    HomePage.submitLoginForm()
    cy.contains('email or password is invalid')
  });

  it("should not login with empty email and password", function() {
    HomePage.clickLogin()
    HomePage.checkLoginFromIsOpen()
    HomePage.submitLoginForm()
    cy.get('h1').contains('Sign in')
  });

});