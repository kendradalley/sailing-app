angular.module('BoatCtrls', ['BoatServices'])
.controller('HomeCtrl', ['$scope', 'Boat', function($scope, Boat) {
  $scope.boats = [];

  Boat.query(function success(data) {
    $scope.boats = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteBoat = function(id, boatIdx) {
    Boat.delete({ id: id }, function success(data) {
      $scope.boats.splice(boatIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('ShowCtrl', ['$scope', '$stateParams', 'Boat', function($scope, $stateParams, Boat) {
  $scope.boat = {};

  Boat.get({ id: $stateParams.id }, function success(data) {
    $scope.boat = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'Boat', function($scope, $location, Boat) {
  $scope.boat = {
    name: '',
    make: '',
    model: '',
    year: '',
    image: '',
    length: '',
    lwl: '',
    beam: '',
    draft: '',
    enginemake: '',
    enginemodel: '',
    horsepower: '',
    hours: '',
    fuel: '',
    water: '',
    holdingtank: '',
  };

  $scope.createBoat = function() {
    Boat.save($scope.boat, function success(data) {
      $location.path('/boats');
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    console.log('My Token:', Auth.getToken());
  };
}])
.controller('SignupCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      $state.go('menu');
    }, function error(res) {
      console.log(res);
    });
  };
}])
.controller('LoginCtrl', ['$scope', '$http', '$state', 'Auth', function($scope, $http, $state, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      $state.go('menu');
    }, function error(res) {
      console.log(res);
    });
  };
}])

.controller('')
