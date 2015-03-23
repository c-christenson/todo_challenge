describe('todoAppController', function() {
  beforeEach(module('todoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('todoAppController', {
      $scope: scope
    });
  }));

  it('has no tasks on initialisation', function(){
    expect(scope.todos).toEqual([]);
  });  

  it('can add a todo item', function(){
    scope.newTodo = "Task 1";
    scope.addTodo();
    expect(scope.todos[0].taskName).toEqual("Task 1");
  });

  it('can tally all items to do', function(){
    scope.newTodo = "Task 1";
    scope.addTodo();
    scope.newTodo = "Task 2";
    scope.addTodo();
    expect(scope.totalTodos()).toEqual(2);
  }); 

  it('can tally all completed items', function(){
    scope.newTodo = "Task 1";
    scope.addTodo();
    scope.newTodo = "Task 2";
    scope.addTodo();
    scope.todos[0].isComplete = true;
    expect(scope.totalComplete()).toEqual(1);
  }); 

  it('can clear all completed items', function(){
    scope.newTodo = "Task 1";
    scope.addTodo();
    scope.newTodo = "Task 2";
    scope.addTodo();
    scope.todos[0].isComplete = true;
    scope.todos[1].isComplete = true;
    scope.clearCompleted();
    expect(scope.totalComplete()).toEqual(0);
  }); 

});