

function groceryModeSwitch(checkbox){
	$(".ingredients ul").toggleClass("groceryMode");

	if($(checkbox).hasClass("checked")){
		$(".groceryCheck").toggleClass("fa-times").toggleClass("fa-check");
		$("#groceryText").text("Exit Grocery List?");

	}
	else{
		$(".groceryCheck").removeClass("fa-check").toggleClass("fa-times");
		$(".ingredients li").removeClass("crossOut");
		$(".allIngredients").removeClass("active");
		$("#groceryText").text("View as Grocery List?");
	}
}

function collapseMenus(arrowParent){
	if(arrowParent.hasClass("ingredients")){
		$(".ingredients ul").slideToggle();
	}
	else if(arrowParent.hasClass("instructions")){
		$(".instructions ol").slideToggle();
	}
	else if(arrowParent.hasClass("nutrition")){
		$(".nutrition p").slideToggle();
	}

}

function allCrossedOut(){

	if( $(".crossOut").length === ($(".ingredients li:not(.allIngredients)").length)){
		$(".allIngredients").addClass("active");
	}
	else{
		$(".allIngredients").removeClass("active");
	}
}


function checkTime(){
	var currentDate = new Date();
	var hours = currentDate.getHours();
	var buttonText = $(".un-button span");

	if (hours < 11){
		buttonText.text("breakfast");
	}
	else if ( hours < 14){
		buttonText.text("lunch");
	}
	else if ( hours <= 24){
		buttonText.text("dinner");
	}
}

$(document).ready(function(){

checkTime();
//clicking on the ingredients arrow closes the ingredients list
$('.fa-play').click(function (){
	$(this).toggleClass("rotate");
	collapseMenus($(this).parent());
});


$(".groceryCheck").on("click", function(){
	$(this).toggleClass("checked");
	groceryModeSwitch(this);
});


$(".ingredients li:not(.allIngredients)").on("click", function (){

	if( $(".ingredients ul").hasClass("groceryMode") ){
		$(this).toggleClass("crossOut");
		allCrossedOut();
	}

});



});