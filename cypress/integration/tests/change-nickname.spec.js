import HomePage from '../../page-objects/pages/BasePage'

describe("Settings: change nickname feature", function() {
    before(function() {
        HomePage.loadHomePage()
        cy.clearCookies()
        HomePage.clickLogin()
        cy.login('smartdrop@mail.ru', 'Freestyle')
        HomePage.submitBtnClick()
        HomePage.checkSettingsLinkPresent()
    })

    it('should update nickname', function () {
        let newNickname = Math.random().toString(36).substring(2,7);
        HomePage.openSettingsPage()
        cy.get(':nth-child(2) > .form-control').clear()
        cy.get(':nth-child(2) > .form-control').type(newNickname)
        HomePage.submitBtnClick()
        cy.contains(newNickname).should('be.visible')
    });
});