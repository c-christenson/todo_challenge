describe('todoAppController', function() {
  beforeEach(module('todoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {

    scope = $rootScope.$new();
    ctrl = $controller('todoAppController', {
      $scope: scope
    });
  }));

  

  
});