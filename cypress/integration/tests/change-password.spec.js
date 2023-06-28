import HomePage from '../../page-objects/pages/BasePage'

describe("Settings: change password feature", function() {
    before(function() {
        HomePage.loadHomePage()
        cy.clearCookies()
        HomePage.clickLogin()
        cy.login('smartdrop@mail.ru', 'Freestyle')
        HomePage.submitBtnClick()
        HomePage.checkSettingsLinkPresent()
    })

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
        HomePage.submitBtnClick()
        cy.contains('email or password is invalid')

        //now log in with new password and check that logged in
        cy.get('input[type="email"]').clear()
        cy.get('input[type="password"]').clear()
        cy.login('smartdrop@mail.ru', 'Freestyle123')
        HomePage.submitBtnClick()
        HomePage.checkSettingsLinkPresent()

        //reset to previous password
        cy.get('a[href="#/settings"]').first().click()
        cy.setNewPassword('Freestyle')
    });
});