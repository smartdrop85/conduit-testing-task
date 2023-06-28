export default class BasePage {
    static loadHomePage() {
        cy.visit('http://angularjs.realworld.io/#/')
    }

    static setMobileViewport() {
        cy.viewport('375', '667')
    }

    static setDesktopViewport() {
        cy.viewport('1280', '800')
    }

    static clickLogin() {
        cy.get('a[href="#/login"]').click()
    }

    static checkSigninBtnPresent() {
        cy.get('a[href="#/login"]').should('be.visible')
    }

    static submitBtnClick() {
        cy.get('[type="submit"]').click()
    }

    static checkLoginFromIsOpen() {
        cy.title().should('equal', 'Sign in — Conduit')
    }

    static checkSettingsLinkPresent() {
        cy.get('a[href="#/settings"]').contains('Settings')
    }

    static openSettingsPage() {
        cy.get('a[href="#/settings"]').click({timeout: 3000})
    }

    static checkAvatarFieldPresent() {
        cy.get(':nth-child(1) > .form-control').should('be.visible')
    }

    static checkNicknameFieldPresent() {
        cy.get(':nth-child(2) > .form-control').should('be.visible')
    }

    static checkAboutYouPresent() {
        cy.get(':nth-child(3) > .form-control').should('be.visible')
    }

    static checkEmailFieldPresent() {
        cy.get('[type="email"]').should('be.visible')
    }

    static checkPasswordFieldPresent() {
        cy.get('[type="password"]').should('be.visible')
    }

    static clickLogOutBtn() {
        cy.get('.btn-outline-danger').click()
    }
 }