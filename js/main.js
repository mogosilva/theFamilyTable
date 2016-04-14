

function checkUnChecked(checkbox){
	$(".ingredients ul").toggleClass("groceryMode");

	if($(checkbox).hasClass("checked")){
		$("button>img").attr("src", "images/checked.svg");
	}
	else{
		$("button>img").attr("src", "images/close.svg");
		$(".ingredients li").removeClass("crossOut");
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



$(document).ready(function(){


//clicking on the ingredients arrow closes the ingredients list
$('img[src="images/arrow.svg"]').click(function (){
	$(this).toggleClass("rotate");
	collapseMenus($(this).parent());
});


$(".recipeMain button").on("click", function(){
	$(this).toggleClass("checked");
	checkUnChecked(this);
});



$(".ingredients li").on("click", function (){

	if( $(".ingredients ul").hasClass("groceryMode") ){
		$(this).toggleClass("crossOut");
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