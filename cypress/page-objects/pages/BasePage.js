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

    static submitLoginForm() {
        cy.get('[type="submit"]').click()
    }

    static checkLoginFromIsOpen() {
        cy.title().should('equal', 'Sign in — Conduit')
    }

    static checkSettingsPageIsOpen() {
        cy.get('a[href="#/settings"]').contains('Settings')
    }

    static openSettingsPage() {
        cy.get('a[href="#/settings"]').click({timeout: 3000})
    }
}