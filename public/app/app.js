var app = angular.module('SailsApp', ['ui.router', 'BoatCtrls', 'TripCtrls', 'MaintenanceCtrls', 'FuelCtrls']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/404');

    $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'app/views/menu.html',
  })
  .state('boats', {
    url: '/boats',
    templateUrl: 'app/views/boats.html',
    controller: 'HomeCtrl'
  })
  .state('newBoat', {
    url: '/boats/new',
    templateUrl: 'app/views/newBoat.html',
    controller: 'NewCtrl'
  })
  .state('boatShow', {
    url: '/boats/:id',
    templateUrl: 'app/views/showBoat.html',
    controller: 'ShowCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'app/views/userSignup.html',
    controller: 'SignupCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/views/userLogin.html',
    controller: 'LoginCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  })
  .state('trips', {
    url: '/trips',
    templateUrl: 'app/views/trips/trips.html',
    controller: 'TripsCtrl'
  })
  .state('newTrip', {
    url: '/trips/new',
    templateUrl: 'app/views/trips/newTrip.html',
    controller: 'NewTripCtrl'
  })
  .state('showTrip', {
    url: '/trips/:id',
    templateUrl: 'app/views/trips/showTrip.html',
    controller: 'ShowTripCtrl'
  })
    .state('maintenance', {
    url: '/maintenance',
    templateUrl: 'app/views/maintenance/maintenance.html',
    controller: 'MaintenanceCtrl'
  })
  .state('newMaintenance', {
    url: '/maintenance/new',
    templateUrl: 'app/views/maintenance/newMaintenance.html',
    controller: 'NewMaintenanceCtrl'
  })
  .state('showMaintenance', {
    url: '/trips/:id',
    templateUrl: 'app/views/maintenance/showMaintenance.html',
    controller: 'ShowMaintenanceCtrl'
  })
  .state('fuel', {
    url: '/fuel',
    templateUrl: 'app/views/fuel/fuel.html',
    controller: 'FuelsCtrl'
  })
  .state('newFuel', {
    url: '/fuel/new',
    templateUrl: 'app/views/fuel/newFuel.html',
    controller: 'NewFuelCtrl'
  })
  .state('showFuel', {
    url: '/fuel/:id',
    templateUrl: 'app/views/fuel/showFuel.html',
    controller: 'ShowFuelCtrl'
  })

    $locationProvider.html5Mode(true);
  }]);
