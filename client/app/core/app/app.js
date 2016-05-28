'use strict';

var COEApp = angular.module("COEApp", ['ngRoute','homeController','appDirective','ui.bootstrap','services']);


window.fbAsyncInit = function() {
    FB.init({
      appId      : '266804313655299',
      status: true, 
      cookie: true,
      xfbml      : true,
      version    : 'v2.6'
    });
};

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
COEApp.run(['$window',
  function ($window) {

}]);
