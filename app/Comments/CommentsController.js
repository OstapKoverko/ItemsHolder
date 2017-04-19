app.controller('сommentsController', function ($scope, $routeParams, CachingService) {
	var comments;
	$scope.addComment = function (comment) {
		comments[$routeParams.id].commentsPerItem.push(comment);
		CachingService.setComments(comments);
		// Change quantity of item comments
		CachingService.getItems(function(result) {
			result[$routeParams.id].commentsQuantity++;
			CachingService.setItems(result);
		});
		debugger;
	};
	  
	// Load comments from Local Storage
	CachingService.getComments(function(result) {
		comments = result;
		$scope.commentsPerItem = result[$routeParams.id].commentsPerItem;
		$scope.id = result[$routeParams.id].itemId;
		debugger;
	});
	
});