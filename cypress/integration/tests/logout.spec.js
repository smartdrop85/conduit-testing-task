import HomePage from '../../page-objects/pages/BasePage'

describe("Settings: logout button", function() {
    before(function() {
        HomePage.loadHomePage()
        cy.clearCookies()
        HomePage.clickLogin()
        cy.login('smartdrop@mail.ru', 'Freestyle')
        HomePage.submitBtnClick()
        HomePage.checkSettingsLinkPresent()
    })

    it('should logout from Settings', function () {
        HomePage.openSettingsPage()
        HomePage.clickLogOutBtn()
        HomePage.checkSigninBtnPresent()
    });
});