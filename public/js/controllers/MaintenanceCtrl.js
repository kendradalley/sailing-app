angular.module('MaintenanceCtrls', ['MaintenanceServices'])
.controller('MaintenanceCtrl', ['$scope', 'Maintenance', function($scope, Maintenance) {
  $scope.maintenances = [];

  Maintenance.query(function success(data) {
    $scope.maintenances = data;
    console.log(data);
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteMaintenance = function(id, MaintenanceIdx) {
    Maintenance.delete({ id: id }, function success(data) {
      $scope.maintenances.splice(MaintenanceIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('ShowMaintenanceCtrl', ['$scope', '$stateParams', 'Maintenance', function($scope, $stateParams, Maintenance) {
  $scope.Maintenance = {};

  Maintenance.get({ id: $stateParams.id }, function success(data) {
    $scope.maintenance = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewMaintenanceCtrl', ['$scope', '$location', 'Maintenance', function($scope, $location, Maintenance) {
  $scope.maintenance = {
  title: '',
  description: '',
  vendor: '',
  category: '',
  date: '',
  cost: '',
  notes: ''
  };

  $scope.createMaintenance = function() {
    Maintenance.save($scope.maintenance, function success(data) {
      $location.path('/maintenance');
    }, function error(data) {
      console.log(data);
    });
  };
}]);

