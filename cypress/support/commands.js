// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Add a new task
Cypress.Commands.add('addTask', (task) => {
  cy.get('input.new-todo').type(`${task}{enter}`);
});

// Mark a task as completed
Cypress.Commands.add('completeTask', (task) => {
  cy.contains('.todo-list li', task).find('.toggle').click();
});

// Delete a task
Cypress.Commands.add('deleteTask', (task) => {
  cy.contains('.todo-list li', task).find('.destroy').invoke('show').click();
});

// Edit a task
Cypress.Commands.add('editTask', (oldTask, newTask) => {
  cy.contains('.todo-list li', oldTask).dblclick();
  cy.get('.todo-list li.editing .edit').clear().type(`${newTask}{enter}`);
});

