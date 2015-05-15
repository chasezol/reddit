var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q){
    this.getPosts = function(){
   	var deferred = $q.defer();
   	$http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
   		deferred.resolve(response.data);
   	})
   	return deferred.promise;
}

    this.addPost = function(post){
    	post.timestamp = Date.now();
  		post.comments = [];
  		post.karma = 0;
  		post.id = guid();
  		debugger;
  		console.log(post);
  		var deferred1 = $q.defer();
  		$http.put('https://devmtn.firebaseio.com/posts/' + post.id + '.json', post).then(function(){
  			deferred1.resolve();
  		})
  		return deferred1.promise;
    }


  var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }




});