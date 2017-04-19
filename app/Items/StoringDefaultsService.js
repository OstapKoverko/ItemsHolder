app.service('StoringDefaultsService', function() {
  // Service for storing default items and comments
  var comments = [{
    itemId: 1,
    commentsPerItem: []
  }, {
    itemId: 2,
    commentsPerItem: []
  }];
  for (var i = 0; i <= 131; i++) {
	  comments[0].commentsPerItem[i] = "A variation of the ordinary lorem ipsum\
	  text has been used in typesetting since the 1960s or earlier, when it\
	  was popularized by advertisements for Letraset transfer sheets. It was";
  }  
	comments[1].commentsPerItem = [
	  "A variation of the ordinary lorem ipsum text has been used in\
		typesetting since the 1960s or earlier, when it was popularized by\
		advertisements for Letraset transfer sheets. It was",
		"A variation of the ordinary lorem ipsum text has been used in typesetting\
		since the 1960s or earlier, when it was popularized by advertisements for\
		Letraset transfer sheets. It was",
		"A variation of the ordinary lorem ipsum text has been used in typesetting\
		since the 1960s or earlier,	when it was popularized by advertisements for\
		Letraset transfer sheets. It was introduced to the Information Age in the\
		mid-1980sA variation of the ordinary lorem ipsum text has been used in\
		typesetting since the 1960s	or earlier, when it was popularized by\
		advertisements for Letraset transfer sheets. It was introduced to the\
		Information Age in the mid-1980sA variation of the ordinary lorem ipsum text\
		has been used in"
	];
  
  this.storing = function () {
    window.localStorage.items = window.angular.toJson([{
  		id: 1,
  		itemName: "First item witch custom name",
  		commentsQuantity: 132
  	}, {
  		id: 2,
  		itemName: "Second item is active",
  		commentsQuantity: 3
  	}]);
  	window.localStorage.comments = window.angular.toJson(comments);
  };
  
});  

  

