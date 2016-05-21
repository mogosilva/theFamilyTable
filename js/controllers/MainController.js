app.constant("FirebaseUrl","https://project-2625766443825852590.firebaseio.com/")

app.controller("recipesController", function($scope, $firebaseObject, $firebaseArray){

	var rootRef = new Firebase("https://project-2625766443825852590.firebaseio.com");



	$scope.recipe = $firebaseObject(rootRef.child('recipes').child('bourbonHoneyHam'));
	$scope.ingredients = $firebaseArray(rootRef.child('recipes').child('bourbonHoneyHam').child("ingredients"));
	$scope.instructions = $firebaseArray(rootRef.child('recipes').child('bourbonHoneyHam').child("instructions"));

	$scope.bannerImage = {
		"background":"url("+'images/ham.png'+")center center no-repeat",
		"background-size" : "cover"
	}
	
	// $scope.ingredients = [
	// 	"2/3 cup bourbon or whiskey", 
	// 	"1 cup clover honey",
	// 	"1/3 cup molasses",
	// 	"1/2 cup 100% fruit orange marmalade",
	// 	"Nonstick cooking spray",
	// 	"1 (5 pound) whole bone-in smoked ham, fully cooked, unsliced",
	// 	"1/8 cup whole cloves"
	// ],
	// $scope.instructions = [
	// 	"Preheat oven to 350 degrees F°",
	// 	"In a medium saucepan, heat bourbon, honey, molasses, and marmalade over medium heat for 30 minutes or until reduced by half",
	// 	"Set aside",
	// 	"With a sharp knife, cut a diamond pattern on the fatty part of the ham",
	// 	"Stud whole cloves in each diamond, at points where lines cross",
	// 	"Spread half of the bourbon glaze over the ham",
	// 	"Roast ham for 30 minutes, uncovered",
	// 	"Baste occasionally with remaining glaze and continue to roast for another 15 minutes",
	// 	"Let ham stand for 20 minutes before slicing"
	// ]
	
});