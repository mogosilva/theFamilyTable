app.constant("FirebaseUrl","https://project-2625766443825852590.firebaseio.com/")

app.controller("indexController", function($scope, $firebaseObject, $firebaseArray){

	$scope.store = function(recipeToDisplay){
		sessionStorage.myPage = recipeToDisplay;
		console.log(sessionStorage.myPage);
	}

	var rootRef = new Firebase("https://project-2625766443825852590.firebaseio.com");
	$scope.allRecipes = $firebaseArray(rootRef.child('recipes'));
});