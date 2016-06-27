(function (angular) {
	'use strict';
	var myApp = angular.module('app', ['ngRoute','app.controllers.main']);
	myApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/:stauts?', {
			controller: 'MainController',
			templateUrl: 'main_tmpl'
		}).otherwise({redirectTo: '/'});
	}]);
})(angular);
