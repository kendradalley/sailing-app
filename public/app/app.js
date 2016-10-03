var app = angular.module('SailsApp', ['ui.router', 'BoatCtrls']);

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
  });

    $locationProvider.html5Mode(true);
  }]);
