/// <reference types = "Cypress" />

beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit(Cypress.env("baseUrl"));
    cy.wait(1000);
    cy.get('[id="email"]').type('Superadmin'); // fill in email
    cy.get('[id="password"]').type('passWORD!23@'); // fill in pswd
    cy.get('.btn-primary').contains('Login').click();
    cy.wait(1000);
});

describe('User Management', () => {
    it('[1] User should be able to access User Management menu', () => {
       // cy.get('a[href="http://167.71.197.242/user"]').contains('User Management').click();
       cy.contains('User Management').click();

        //assert
        cy.url().should('include', '/user');
        cy.get('.card-header').contains('User Admin Panel');
    });

    it('[2] User should be able to Create New User Admin Panel with valid data', () => {
        const randomUserName = "usernameauto"+Math.floor(Math.random() * 100) + 1;
        const randomFullName = "Full Name Auto "+Math.floor(Math.random() * 100) + 1;
        const randomEmail = "testauto"+Math.floor(Math.random() * 100) + 1+"@yopmail.com";

        cy.contains('User Management').click();
        cy.wait(500);
        cy.get('.card-header').contains('Create').click(); //click Create
        cy.url().should('include','/create'); // assert click Create
        cy.get('[name="username"]').type(randomUserName) // input username
        cy.get('[name="name"]').type(randomFullName); // input full name
        cy.get('[name="email"]').type(randomEmail); // input email
        cy.get('[name="role_id"]').select('Super Admin'); // select role
        cy.get('[name="user_position_id"]').select('Admin'); //
        cy.get('[type="submit"]').contains('Submit').click();
        //assert
        cy.get('[class="alert alert-success"]').should('be.visible');
        cy.get('[role="alert"]').should('contain','Success insert data.');
    });
    it.skip('[3] User should be able to inactivate user admin panel', () => {
        cy.contains('User Management').click();
        cy.wait(500);
        //cy.get('tr:nth-of-type(4)  .check-control').check();
    });
    // it('[3] User should be able to delete user admin panel successfully', () => {
        
    // });
});