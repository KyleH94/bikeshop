var button = document.getElementsByTagName("button");
var thumbnail = document.getElementsByClassName("img-thumbnail");


/*Somehow This Worked(togleCLass)*/

$("button").click(function() {
	$(this).toggleClass('btn-outline-new');
});

$(".img-thumbnail").hover(function() {
	$(this).toggleClass("transition");
});

