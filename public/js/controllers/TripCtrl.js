angular.module('TripCtrls', ['TripServices'])
.controller('TripsCtrl', ['$scope', 'Trip', function($scope, Trip) {
  $scope.trips = [];

  Trip.query(function success(data) {
    $scope.trips = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteTrip = function(id, tripIdx) {
    Trip.delete({ id: id }, function success(data) {
      $scope.trips.splice(tripIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('ShowTripCtrl', ['$scope', '$stateParams', 'Trip', function($scope, $stateParams, Trip) {
  $scope.trip = {};

  Trip.get({ id: $stateParams.id }, function success(data) {
    $scope.trip = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewTripCtrl', ['$scope', '$location', 'Trip', function($scope, $location, Trip) {
  $scope.trip = {
    date: '',
    time: '',
    startdate: '',
    enddate: '',
    starttime: '',
    endtime: '',
    distance: '',
    departure: '',
    destination: '',
    enginehours: '',
    speed: '',
    windSpeed: '',
    windDirection: '',
  };

  $scope.createTrip = function() {
    Trip.save($scope.trip, function success(data) {
      $location.path('/trips');
    }, function error(data) {
      console.log(data);
    });
  };
}]);

