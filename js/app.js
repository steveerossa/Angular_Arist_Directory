var my_app = angular.module("my_App", ["ngRoute", "artist_controller"]);

my_app.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/list", {
		templateUrl: "partials/list.html",
		controller: "ListController"
	}).when("/details/:itemId", {
		templateUrl: "partials/details.html",
		controller: "DetailsController"
	}).
	otherwise({
		redirectTo: "/list"
	});
}]);