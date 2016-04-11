function rotateImage(image){
	$(image).toggleClass("rotate");
}





$(document).ready(function(){


//clicking on the ingredients arrow closes the ingredients list
$('.ingredients img[src="images/arrow.svg"]').click(function (){
	rotateImage(this);
	$(".ingredients ul").slideToggle();
});

//clicking on the instructions arrow closes the instructions list
$('.instructions img[src="images/arrow.svg"]').click(function (){
	rotateImage(this);
	$(".instructions ol").slideToggle();
});

//clicking on the Nutrition arrow closes the nutrition info
$('.nutrition img[src="images/arrow.svg"]').click(function (){
	rotateImage(this);
	$(".nutrition p").slideToggle();
});

//clicking on the menu causes a side menu to appear

$(".menu").click(function (){
	$(".menu").toggleClass("visible");
	$("#offscreenMenu").toggleClass("visible");
});



});