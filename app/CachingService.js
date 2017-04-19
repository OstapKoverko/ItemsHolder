app.service('CachingService', function() {
  // Service for save and load data from Local Storage
  this.setItems = function(items) {
    window.localStorage.items = window.angular.toJson(items);
  };
  this.setComments = function(comments) {
    window.localStorage.comments = window.angular.toJson(comments);
  };
  this.getItems = function(callback) {
    callback(JSON.parse(window.localStorage.items));
  };
  this.getComments = function(callback) {
    callback(JSON.parse(window.localStorage.comments));
  };
});