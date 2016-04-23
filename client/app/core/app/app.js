'use strict';

var COEApp = angular.module("COEApp", ['ngRoute','homeController','appDirective','ui.bootstrap']);

COEApp.config(['$routeProvider','$locationProvider',

	function($routeProvider, $locationProvider){
		$routeProvider
			.when('/',{
					templateUrl : 'views/home.html',	
					controller : 'home'
					
			
			})
			.when('/logout', {
					templateUrl : 'views/result.html',
					controller : 'logout'
				
			})
			.when('/create', {
					templateUrl : 'views/create_exam.html',
					controller : 'examController'
				
			})
			.otherwise({
				redirectTo : '/'
			});
			
		// $locationProvider.html5Mode(true);
		// $locationProvider.hashPrefix('*');
		// $locationProvider.replace('/COE/');
	}
	
	

]);

// Initialize the application
COEApp.run(['$location', function AppRun($location) {
    debugger; // -->> here i debug the $location object to see what angular see's as URL
}]);