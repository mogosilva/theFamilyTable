app.constant("FirebaseUrl","https://project-2625766443825852590.firebaseio.com/")

app.controller("recipesController", function($scope, $firebaseObject, $firebaseArray){


	var rootRef = new Firebase("https://project-2625766443825852590.firebaseio.com");

	$scope.allRecipes = $firebaseArray(rootRef.child('recipes'));

	$scope.recipe = $firebaseObject(rootRef.child('recipes').child(sessionStorage.myPage));
	$scope.ingredients = $firebaseArray(rootRef.child('recipes').child(sessionStorage.myPage).child("ingredients"));
	$scope.instructions = $firebaseArray(rootRef.child('recipes').child(sessionStorage.myPage).child("instructions"));

	$scope.bannerImage = {
		"background":"url('images/"+ $scope.recipe.$id +".png')center center no-repeat",
		"background-size" : "cover"
	}

	$scope.store = function(recipeToDisplay){
		sessionStorage.myPage = recipeToDisplay;
		console.log(sessionStorage.myPage);
	}
	
});