/// <reference types = "Cypress" />

describe('LOG OUT', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
        cy.wait(1000);
        cy.get('[id="email"]').type('Superadmin'); // fill in email
        cy.get('[id="password"]').type('passWORD!23@'); // fill in pswd
        cy.get('.btn-primary').contains('Login').click();
        cy.wait(1000);
    });

    it('[1] User should be able to log out by clicking log out ', () => {
        cy.get('.dropdown-toggle').contains('Hello').click();
        cy.get("li:nth-of-type(2) > a[title='Logout']").contains('Log Out').click();
        
        //assert
        cy.url().should('include', '/login');
        cy.get('h3.mb-4').should('contain','Login');
    });

    it('[2] User should be able to log out by clicking the log out icon', () => {
        cy.get("a[title='Logout'] > .feather.icon-log-out").click()

        //assert
        cy.url().should('include', '/login');
        cy.get('h3.mb-4').should('contain','Login');
    });
});