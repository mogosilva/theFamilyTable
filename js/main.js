

function groceryModeSwitch(checkbox){
	$(".ingredients ul").toggleClass("groceryMode");

	if($(checkbox).hasClass("checked")){
		$("button>img").attr("src", "images/checked.svg");
		$("#groceryText").text("Exit Grocery List?");

	}
	else{
		$("button>img").attr("src", "images/close.svg");
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



$(document).ready(function(){


//clicking on the ingredients arrow closes the ingredients list
$('img[src="images/arrow.svg"]').click(function (){
	$(this).toggleClass("rotate");
	collapseMenus($(this).parent());
});


$(".recipeMain button").on("click", function(){
	$(this).toggleClass("checked");
	groceryModeSwitch(this);
});



$(".ingredients li:not(.allIngredients)").on("click", function (){

	if( $(".ingredients ul").hasClass("groceryMode") ){
		$(this).toggleClass("crossOut");
		allCrossedOut();
	}

});



//clicking on the menu causes a side menu to appear
/*
$(".menu").click(function (){
	$(".menu").toggleClass("visible");
	$("#offscreenMenu").toggleClass("visible");
});
*/


});