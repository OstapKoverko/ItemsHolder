app.controller('сommentsController', function ($scope, $routeParams, CachingService) {
	var comments;
	$scope.addComment = function (comment) {
		comments.push({
			itemId: comments.length + 1,
			commentsPerItem: comment
		});
		CachingService.setComments(comments);
		// Change quantity of item comments
		CachingService.getItems(function(result) {
			var items = result;
			items[$routeParams.id - 1].commentsQuantity++;
			CachingService.setItems(items);
		});
		debugger;
	};
	  
	// Load comments from Local Storage
	CachingService.getComments(function(result) {
		comments = result;
		$scope.commentsPerItem = result[$routeParams.id - 1].commentsPerItem;
		debugger;
	});
	

	
	// var items;
	// var comments = JSON.parse(window.localStorage.comments);
	// $scope.id = $routeParams.id;
	
	
	
	// $scope.comments = comments[$routeParams.id - 1].commentsPerItem;
		
	// // $scope.comments = $scope.items[$routeParams.id - 1].comments;
	// $scope.addComment = function(comment) {
	// 	items = JSON.parse(window.localStorage.items);
	// 	items[$routeParams.id - 1].commentsQuantity++;
	// 	window.localStorage.items = window.angular.toJson(items);
	// 	comments[$routeParams.id - 1].commentsPerItem.push(comment);
	// 	debugger;
	// 	window.localStorage.comments = window.angular.toJson(comments);
		
	// 	debugger;
	// };
});