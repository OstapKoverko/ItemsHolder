var app = window.angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider  
	.when("/items/:id", {
		templateUrl : "app/Comments/comments.html",
		controller : "сommentsController"
	});
});