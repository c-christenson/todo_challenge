describe('todoApp homepage', function() {
  
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('To-Do List');
  });

  it('should have an todo form', function() {
    expect(browser.isElementPresent(by.id('todoForm'))).toBe(true);
  });
  
  it("a user can add a todo item", function() {
    element(by.model('newTodo')).sendKeys('Task 1');
    element(by.id('addTodo')).click();
    expect(element(by.repeater('todo in todos')).getText()).toContain("Task 1");
  });

  it("tracks the number of todo items", function() {
    element(by.model('newTodo')).sendKeys('Task 1');
    element(by.id('addTodo')).click();
    element(by.model('newTodo')).sendKeys('Task 2');
    element(by.id('addTodo')).click();
    expect(element(by.id('totalTodo')).getText()).toContain("Total Items To Do: 2");
  });

  it("tracks the number of complete items", function() {
    element(by.model('newTodo')).sendKeys('Task 1');
    element(by.id('addTodo')).click();
    element(by.model('todo.isComplete')).click();
    element(by.model('newTodo')).sendKeys('Task 2');
    element(by.id('addTodo')).click();
    expect(element(by.id('totalComplete')).getText()).toContain("Total Items Completed: 1");
  });

  it("can clear all completed tasks", function() {
    element(by.model('newTodo')).sendKeys('Task 1');
    element(by.id('addTodo')).click();
    element(by.model('todo.isComplete')).click();
    element(by.model('newTodo')).sendKeys('Task 2');
    element(by.id('addTodo')).click();
    element(by.id('clear')).click();
    expect(element(by.id('totalComplete')).getText()).toContain("Total Items Completed: 0");
  });

});
