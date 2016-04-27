//IMPORTING JSON FILE
var artist_controllers = angular.module("artist_controller",["ngAnimate"]);/*<-- hold ng-app module and, holds the dependencies-->*/
								 
artist_controllers.controller("ListController", ["$scope", "$http", function($scope, $http) { /*IN ARRAY TO AVOID NAME MINIFICATION CONFLICTS*/
	$http.get("js/data.json").success(function(data) {
		$scope.artists = data;
		$scope.artist_order = "name";
	});
}]);

artist_controllers.controller("DetailsController", ["$scope", "$http","$routeParams", function($scope, $http, $routeParams) { /*IN ARRAY TO AVOID NAME MINIFICATION CONFLICTS*/
	$http.get("js/data.json").success(function(data) {
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) 
		{
			$scope.prevItem = Number($routeParams.itemId) - 1;
		}
		else 
		{
			$scope.prevItem = $scope.artists.length - 1;
		}

		if ($routeParams.itemId < $scope.artists.length - 1) 
		{
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}
		else {
			$scope.nextItem = 0;
		}

	});
}]);