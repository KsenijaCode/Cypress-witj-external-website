const pageUrl = "https://todolist.james.am/"


// Add Task
describe('To-Do List Application', () => {
  beforeEach(() => {
    // Visit the website before each test
    cy.visit('https://todolist.james.am/');
  });

  it('should add a new task to the list', () => {
    const newTask = 'Buy groceries';

    // Type a new task in the input box and press Enter
    cy.get('.new-todo').type(`${newTask}{enter}`);

    // Verify that the new task appears in the list
    cy.get('.todo-list li').should('contain.text', newTask);
  });
});


// Mark Task as Completed
it('should mark a task as completed', () => {
  const task = 'Buy groceries';

  // Add a new task first
  cy.get('.new-todo').type(`${task}{enter}`);

  // Mark the task as completed by clicking the checkbox
  cy.get('.todo-list li .toggle').click();

  // Verify the task has the "completed" class
  cy.get('.todo-list li').should('have.class', 'completed');
});


// Delete Task
it('should delete a task from the list', () => {
  const task = 'Walk the dog';

  // Add a new task first
  cy.get('.new-todo').type(`${task}{enter}`);

  // Delete the task
  cy.get('.todo-list li .destroy').invoke('show').click();

  // Verify the task no longer appears in the list
  cy.get('.todo-list li').should('not.contain.text', task);
});


// Edit Task
it('should edit an existing task', () => {
  const task = 'Read a book';
  const updatedTask = 'Read a book for 30 minutes';

  // Add a new task first
  cy.get('.new-todo').type(`${task}{enter}`);

  // Double-click to edit the task
  cy.get('.todo-list li').dblclick();

  // Update the task text
  cy.get('.todo-list li.editing .edit')
    .clear()
    .type(`${updatedTask}{enter}`);

  // Verify the task has been updated
  cy.get('.todo-list li').should('contain.text', updatedTask);
});


// Filter Tasks
it('should filter tasks correctly', () => {
  const task1 = 'Learn Cypress';
  const task2 = 'Go for a run';

  // Add two tasks
  cy.get('.new-todo').type(`${task1}{enter}`);
  cy.get('.new-todo').type(`${task2}{enter}`);

  // Mark the first task as completed
  cy.get('.todo-list li:first .toggle').click();

  // Filter by "Active" and check the visible task
  cy.contains('Active').click();
  cy.get('.todo-list li').should('have.length', 1).and('contain.text', task2);

  // Filter by "Completed" and check the visible task
  cy.contains('Completed').click();
  cy.get('.todo-list li').should('have.length', 1).and('contain.text', task1);

  // Filter by "All" and check that both tasks are visible
  cy.contains('All').click();
  cy.get('.todo-list li').should('have.length', 2);
});
