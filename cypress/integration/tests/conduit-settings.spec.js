import HomePage from '../../page-objects/pages/BasePage'

describe("Conduit Settings feature", function() {
  beforeEach(function() {
    HomePage.loadHomePage()
    cy.clearCookies()
    HomePage.clickLogin()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    HomePage.submitLoginForm()
    HomePage.checkSettingsLinkPresent()
  })

  it("should open Settings page and check fields", function() {
    HomePage.openSettingsPage()
    cy.get('h1').contains('Your Settings')
    HomePage.checkAvatarFieldPresent()
    HomePage.checkNicknameFieldPresent()
    HomePage.checkAboutYouPresent()
    HomePage.checkEmailFieldPresent()
    HomePage.checkPasswordFieldPresent()
  });

  it("should update Email", function() {
    HomePage.openSettingsPage()
    cy.setNewEmail('changedEmail@test.com')

    //since it's impossible to get the email text from the field
    //and impossible to GET user email via API
    //A workaround to check the email is updated is to try to login with an old one
    cy.get('a[href="#/settings"]').first().click()
    HomePage.clickLogOutBtn()
    cy.get('a[href="#/login"]').should('be.visible')
    HomePage.clickLogin()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    HomePage.submitLoginForm()
    cy.contains('email or password is invalid')

    //now log in with new Email and check that logged in
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').clear()
    cy.login('changedEmail@test.com', 'Freestyle')
    HomePage.submitLoginForm()
    HomePage.checkSettingsLinkPresent()

    //reset to previous email
    cy.get('a[href="#/settings"]').first().click()
    cy.setNewEmail('smartdrop@mail.ru')
  });

  it('should update password', function () {
    HomePage.openSettingsPage()
    cy.setNewPassword('Freestyle123')

    //since it's impossible to get the Password from the field
    //A workaround to check the password is updated is to try to login with an old one
    cy.get('a[href="#/settings"]').first().click()
    HomePage.clickLogOutBtn()
    cy.get('a[href="#/login"]').should('be.visible')
    HomePage.clickLogin()
    cy.login('smartdrop@mail.ru', 'Freestyle')
    HomePage.submitLoginForm()
    cy.contains('email or password is invalid')

    //now log in with new password and check that logged in
    cy.get('input[type="email"]').clear()
    cy.get('input[type="password"]').clear()
    cy.login('smartdrop@mail.ru', 'Freestyle123')
    HomePage.submitLoginForm()
    HomePage.checkSettingsLinkPresent()

    //reset to previous password
    cy.get('a[href="#/settings"]').first().click()
    cy.setNewPassword('Freestyle')
  });
});