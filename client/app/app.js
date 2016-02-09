angular.module('NPMBUILDER', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    		// Routing ---------------------------------------------------------------------------------------------------------------------------
    		$stateProvider
			.state('dashboard', {
				url           	: '/',
				templateUrl: 'app/dashboard/templates/dashboardView.html',
				controller    	: 'DashboardCntrl',
			})
    		$urlRouterProvider.otherwise('/');
    		// # Routing ------------------------------------------------------------------------------------------------------------------------

	}])

	.controller("AppCntrl", ['$scope', function($scope){
		
		console.log("App controller loaded ...");
		
	}])

	.directive('includeReplace', function () {
		return {
			require 	: 'ngInclude',
			restrict 	: 'A',
				link 	: function (scope, el, attrs) {
					el.replaceWith(el.children());
				}
		};
	});