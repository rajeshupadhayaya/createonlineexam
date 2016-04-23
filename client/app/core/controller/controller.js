'use strict';

var homeController = angular.module('homeController', ['ngAnimate','ngMaterial', 'ngMessages','ngAria']);


homeController.controller('home', ['$scope',
	function($scope){
		$scope.page='first page';
		$scope.isCollapsed = false;
	}

]);

homeController.controller('loginController',['$scope', '$http', '$location','$rootScope',
		function($scope, $http,$location,$rootScope){
			$rootScope.showModal = false;
			$rootScope.user = {};
			
			$rootScope.openLogin  = function(){
				
				$rootScope.showModal = true;
				$rootScope.currentTemplate = '/login.html';
			};
			
			$rootScope.registerWithUsForm = function(){
				// $scope.showModal = !$scope.showModal;
				$rootScope.currentTemplate = '/registerWithUsForm.html';
			};
			$rootScope.lostPassword = function(){
				// $scope.showModal = !$scope.showModal;
				$rootScope.currentTemplate = '/lostPassword.html';
			};
			
			$rootScope.submitLogin = function (){
				$http({
					method  : 'POST',
					url     : 'ajax/login.php',
					data    : $scope.user, //forms user object
					headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
				})
				.success(function(data) {
					if (data.errors) {
						  // Showing errors.
						$scope.errorUserName = data.errors.username;
						$scope.errorPassword = data.errors.password;
						$scope.notMatch = data.errors.notMatch;
					} else {
							$scope.message = data.message;
							// $routeScope.isLogin = true;
							$location.path('/dashboard').replace
					}
				});
			};
			
			
			$rootScope.submitRegister = function (){
				$http({
					method  : 'POST',
					url     : 'ajax/register.php',
					data    : $scope.user, //forms user object
					headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
				})
				.success(function(data) {
					if (data.errors) {
						  // Showing errors.
						$scope.errorUserName = data.errors.username;
						$scope.errorPassword = data.errors.password;
						$scope.notMatch = data.errors.notMatch;
					} else {
							$scope.message = data.message;
							// $routeScope.isLogin = true;
							$location.path('/login').replace
					}
				});
			};
		}
]).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
 });

homeController.controller('examController', ['$scope', 
		function($scope){
			$scope.ques = {};
			$scope.titleName = 'Exam Create';
			$scope.firstPage= true;
			$scope.secondPage = false;
			$scope.showQuestion  = 0;
			
			// $scope.ques.noOfQues = 0;
			
			$scope.showQuesBlock = function(){
				$scope.firstPage= false;
				$scope.secondPage = true;
			}
			
			$scope.showMainBlock = function(){
				$scope.firstPage= true;
				$scope.secondPage = false;
			}
			
			
			$scope.range = function(count) {
				return Array.apply(0, Array(+count)).map(function(value,index){
				return index;
				});
			}
			
			$scope.nextQues = function(n){
				
				$scope.showQuestion = n + 1;
				console.log(n);
				// console.log($scope.showQuestion);
			}
			$scope.prevQues = function(n){
				
				$scope.showQuestion = n - 1;
				console.log(n);
				// console.log($scope.showQuestion);
			}
			
        
			
			
			
		}
]);

