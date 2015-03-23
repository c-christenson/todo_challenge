todoApp.controller('todoAppController', function($scope) {

$scope.todos = [];

  $scope.addTodo = function  () {
    $scope.todos.push({taskName : $scope.newTodo , isComplete : false });
  };

  $scope.clearCompleted = function () {
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].isComplete === true) {
        $scope.todos.splice(i, 1);
        i -= 1;
      }
    }; 
  };

  $scope.totalTodos = function () {
    todosRemaining = 0
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].isComplete === false) {
        todosRemaining += 1;
      }
    }; 
    return todosRemaining;
  };

 $scope.totalComplete = function () {
  todosComplete = 0
    for (var i = 0; i < $scope.todos.length; i++) {
      if ($scope.todos[i].isComplete === true) {
        todosComplete += 1;
      }
    }; 
    return todosComplete;
  };


});
  


  
