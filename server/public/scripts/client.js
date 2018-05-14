console.log('Hi!');

var app = angular.module('MessageApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
        templateUrl: '/views/home.view.html',
        controller: 'HomeController as vm'
    })
    .when('/message_board', {
        templateUrl: '/views/message.view.html',
        controller: 'MessageController as vm'
    })
        .otherwise({
        template: '<h1>404</h1>'

    });
}]);
