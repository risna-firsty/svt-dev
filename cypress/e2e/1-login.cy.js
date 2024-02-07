/// <reference types = "Cypress" />

describe('LOG IN', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit(Cypress.env("baseUrl"));
        //cy.clearAllLocalStorage
    });

    it('[1] User should not be able to log in with invalid password', () => {
        cy.get('[id="email"]').type('Superadmin'); // fill in email
        cy.get('[id="password"]').type('passWORDss!23@'); // fill in pswd
        cy.get('.btn-primary').contains('Login').click();

        // assert
        cy.get('[class="invalid-feedback"]').should('contain','These credentials do not match our records.');
    });

    it('[2] User should not be able to log in with invalid username', () => {
        cy.get('[id="email"]').type('Spreadmin'); // fill in email
        cy.get('[id="password"]').type('passWORD!23@'); // fill in pswd
        cy.get('.btn-primary').contains('Login').click();

        // assert
        cy.get('[class="invalid-feedback"]').should('contain','These credentials do not match our records.');
    });

    it('[3] User should be able to log in with valid credential', () => {
        cy.get('[id="email"]').type('Superadmin'); // fill in email
        cy.get('[id="password"]').type('passWORD!23@'); // fill in pswd
        cy.get('.btn-primary').contains('Login').click();

        // assert
        cy.url().should('include','/');
        cy.get('[class="b-title"]').should('contain', 'Samsung SVT - DEV');
    });
});