import HomePage from '../../page-objects/pages/BasePage'

describe("Settings: change description feature", function() {
    before(function() {
        HomePage.loadHomePage()
        cy.clearCookies()
        HomePage.clickLogin()
        cy.login('smartdrop@mail.ru', 'Freestyle')
        HomePage.submitBtnClick()
        HomePage.checkSettingsLinkPresent()
    })

    it('should update description', function () {
        let newDescr = Math.random().toString(36).substring(2,50);
        HomePage.openSettingsPage()
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(newDescr)
        HomePage.submitBtnClick()
        cy.contains(newDescr).should('be.visible')
    });
});