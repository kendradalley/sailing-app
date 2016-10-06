angular.module('FuelCtrls', ['FuelServices'])
.controller('FuelsCtrl', ['$scope', 'Fuel', function($scope, Fuel) {
    $scope.fuels = [];

    Fuel.query(function success(data) {
        $scope.fuels = data;
    }, function error(data) {
        console.log(data);
    });

    $scope.deleteFuel = function(id, FuelIdx) {
        Fuel.delete({ id: id }, function success(data) {
            $scope.fuels.splice(FuelIdx, 1);
        }, function error(data) {
            console.log(data);
        });
    };
}])
.controller('ShowFuelCtrl', ['$scope', '$stateParams', 'Fuel', function($scope, $stateParams, Fuel) {
    $scope.fuel = {};

    Fuel.get({ id: $stateParams.id }, function success(data) {
        $scope.fuel = data;
    }, function error(data) {
        console.log(data);
    });
}])
.controller('NewFuelCtrl', ['$scope', '$location', 'Fuel', function($scope, $location, Fuel) {
    $scope.fuel = {
        date: '',
        cost: '',
        gallons: '',
        engineHours: ''
    };

    $scope.createFuel = function() {
        Fuel.save($scope.fuel, function success(data) {
            $location.path('/fuel');
        }, function error(data) {
            console.log(data);
        });
    };
}]);
