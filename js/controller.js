var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){

   FirebaseService.getPosts().then(function(posts){
      console.log(posts);
      $scope.posts = posts;
     })

   $scope.addPost = function(){
   	FirebaseService.addPost($scope.newPost).then(function(){
   	  FirebaseService.getPosts().then(function(posts){
      console.log(posts);
      $scope.posts = posts;
     })
   	})
   }

});