const pageUrl = "https://todolist.james.am/"


// Add Task
describe('To-Do List E2E Tests', () => {
  beforeEach(() => {
    cy.visit('https://todolist.james.am/');
  });

  it('should add a new task to the list', () => {
    const newTask = 'Buy groceries';

    // Add task using the custom command
    cy.addTask(newTask);

    // Assert that the task is present in the list
    cy.get('.todo-list li').should('contain.text', newTask);
  });

// Mark Task as Completed
it('should mark a task as completed', () => {
  const task = 'Buy groceries';

  // Add task
  cy.addTask(task);

  // Complete task using custom command
  cy.completeTask(task);

  // Assert that the task is marked as completed
  cy.contains('.todo-list li', task).should('have.class', 'completed');
});

// Delete Task
it('should delete a task from the list', () => {
  const task = 'Walk the dog';

  // Add task
  cy.addTask(task);

  // Delete the task using the custom command
  cy.deleteTask(task);

  // Assert that the task is no longer in the list
  // cy.get('.todo-list li').should('not.contain.text', task);
});

it('should delete completed task from the list', () => {
  const task = 'Go home';
  cy.addTask(task);
  cy.deleteTask(task);
});

// Edit Task
it('should edit an existing task', () => {
  const oldTask = 'Read a book';
  const updatedTask = 'Read a book for 30 minutes';

  // Add task
  cy.addTask(oldTask);

  // Edit the task using custom command
  cy.editTask(oldTask, updatedTask);

  // Assert that the task has been updated
  cy.get('.todo-list li').should('contain.text', updatedTask);
});

});















