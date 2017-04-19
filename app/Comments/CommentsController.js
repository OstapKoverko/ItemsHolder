app.controller('сommentsController', function ($scope, $routeParams, CachingService) {
	var comments;
	$scope.addComment = function (comment) {
		if (!comments[$routeParams.id]) {
			comments.push({
				itemId: $routeParams.id + 1,
				commentsPerItem: [] 
			}); 
		}
		comments[$routeParams.id].commentsPerItem.push(comment);
		CachingService.setComments(comments);
		// Change quantity of item comments
		CachingService.getItems(function(result) {
			result[$routeParams.id].commentsQuantity++;
			CachingService.setItems(result);
		});
		// Load items from Local Storage
		CachingService.getItems(function(result) {
			$scope.items = result;
		});
	};
		
	// Load comments from Local Storage
	CachingService.getComments(function(result) {
		comments = result;
		$scope.id = +$routeParams.id + 1;
		if (!result[$routeParams.id]) {return;}
		$scope.commentsPerItem = result[$routeParams.id].commentsPerItem;
	});
	
});