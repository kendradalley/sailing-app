angular.module('TripServices', ['ngResource'])

.factory('Trip', ['$resource', function($resource){
  return $resource('/api/trips/:id');
}]);