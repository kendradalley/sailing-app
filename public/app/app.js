var app = angular.module('SailsApp', ['ui-router']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');

    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/views/signup.html',
      controller: 'SignupCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    })
    .state('boats', {
      url: '/boats',
      templateUrl: 'app/views/boats.html',
      controller: 'BoatsCtrl'
    })
    .state('boats/:id', {
      url: '/boats/:id',
      templateUrl: 'app/views/boat.html'
    })
        $locationProvider.html5Mode(true);

  }]);