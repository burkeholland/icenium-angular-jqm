angular.module('TodoApp', []).config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', { templateUrl: '#home' }).
    when('/settings/:id', { templateUrl: '#settings' , jqmOptions: { transition: 'flip' } })
}]);

function TodoCtrl($scope) {

  $scope.tracks = [];
  $scope.src = "51550786";
  $scope.clientId = '04c79325606ff36fa1508db99f995ec8';

  SC.initialize({
    client_id: '04c79325606ff36fa1508db99f995ec8'
  });

  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', { q: 'klaypex', license: 'cc-by-sa' }, function(tracks) {
    $scope.tracks = tracks;
    $scope.$apply();
    console.log
  });

  // $scope.src = SC.get(track.stream_url, function(sound) {
  //   console.log(sound);
  // });
}
