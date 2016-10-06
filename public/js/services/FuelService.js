angular.module('FuelServices', ['ngResource'])

.factory('Fuel', ['$resource', function($resource){
  return $resource('/api/fuels/:id');
}]);