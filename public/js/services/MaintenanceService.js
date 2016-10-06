angular.module('MaintenanceServices', ['ngResource'])

.factory('Maintenance', ['$resource', function($resource){
  return $resource('/api/maintenance/:id');
}]);