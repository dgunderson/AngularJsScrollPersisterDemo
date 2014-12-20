(function (angular) {
    "use strict";

    var app = angular.module("ScrollPersisterApp", ["ngRoute"]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', { templateUrl: '/home.html', controller: 'homeController as vm' });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
})(angular);