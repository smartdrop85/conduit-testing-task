import HomePage from '../../page-objects/pages/BasePage'

describe("Conduit Settings feature", function() {
  beforeEach(function() {
    HomePage.loadHomePage()
    cy.clearCookies()
    HomePage.clickLogin()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    HomePage.submitLoginForm()
    HomePage.checkSettingsPageIsOpen()
  })

  it("should open Settings page and check fields", function() {
    HomePage.openSettingsPage()
    cy.get('h1').contains('Your Settings')
    cy.get(':nth-child(1) > .form-control').should('be.visible')
    cy.get(':nth-child(2) > .form-control').should('be.visible')
    cy.get(':nth-child(3) > .form-control').should('be.visible')
    cy.get('[type="email"]').should('be.visible')
    cy.get(':nth-child(5) > .form-control').should('be.visible')
    cy.get('[type="submit"]').should('be.visible')
  });

  it("should update Email", function() {
    cy.get('a[href="#/settings"]').click()
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('changedEmail@test.com')
    cy.get('[type="submit"]').click()
    cy.wait(3000)

    //since it's impossible to get the email text from the field
    //and impossible to GET user email via API
    //A workaround to check the email is updated is to try to login with an old one
    cy.get('a[href="#/settings"]').first().click()
    cy.get('.btn-outline-danger').click()
    cy.get('a[href="#/login"]').should('be.visible')
    cy.get('a[href="#/login"]').click()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    cy.get('[type="submit"]').click()
    cy.contains('email or password is invalid')

    //now log in with new Email and check that logged in
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').clear()
    cy.login('changedEmail@test.com', 'Freestyle')
    cy.get('[type="submit"]').click()
    cy.get('a[href="#/settings"]').contains('Settings')
  });

  after(function() {
    //reset to default email
    cy.get('a[href="#/settings"]').first().click()
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('smartdrop@mail.ru')
    cy.get('[type="submit"]').click()
    cy.wait(3000)
  })
});