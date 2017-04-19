app.controller('ItemsController', function ($scope, StoringDefaultsService, CachingService) {
	$scope.itemsVisible = true;	
	$scope.setItemsVisible = function () {
		$scope.itemsVisible = true;
	};
	
	$scope.addItem = function (itemName) {
		$scope.items.push({
			id: $scope.items.length + 1,
			itemName: itemName,
			commentsQuantity: null
		});
		CachingService.setItems($scope.items);
	};
	$scope.deleteItem = function (itemIndex) {
		$scope.items.splice(itemIndex, 1);
		CachingService.setItems($scope.items); 
	};

	// Storing default items and comments
	if (window.localStorage.getItem("items") === null) {
		StoringDefaultsService.storing();
	}
	
	// Load items from Local Storage
	CachingService.getItems(function(result) {
		$scope.items = result;
	});

});