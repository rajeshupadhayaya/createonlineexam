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
COEApp.run(['$location','$rootScope', '$window', 
  function ($location,$rootScope, $window) {
    // debugger; // -->> here i debug the $location object to see what angular see's as URL
    $rootScope.user = {};
    $window.fbAsyncInit = function() {
    
        FB.init({ 

          appId: '{266804313655299}', 

          channelUrl: 'app/channel.html', 

          status: true, 

          cookie: true, 

          xfbml: true,
          
          version: 'v2.6'
        });

        // sAuth.watchAuthenticationStatusChange();

      };

      // Are you familiar to IIFE ( http://bit.ly/iifewdb ) ?

      (function(d){
        // load the Facebook javascript SDK

        var js, 
        id = 'facebook-jssdk', 
        ref = d.getElementsByTagName('script')[0];

        if (d.getElementById(id)) {
          return;
        }

        js = d.createElement('script'); 
        js.id = id; 
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";

        ref.parentNode.insertBefore(js, ref);

      }(document));

}]);
