angular.module('TodoApp', []).config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', { templateUrl: '#home' }).
    when('/settings', { templateUrl: '#settings' , jqmOptions: { transition: 'flip' } })
}]);

function TodoCtrl($scope) {
    $scope.things = ["thing 1", "thin 2", "thing 3"]
  
}
