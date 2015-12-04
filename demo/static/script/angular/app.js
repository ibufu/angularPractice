'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/index.html', {templateUrl: 'view/tpl/welcome.html', controller: WelcomeCtrl})
        .otherwise({redirectTo: '/index.html'});
    $locationProvider.html5Mode(true);
}]);