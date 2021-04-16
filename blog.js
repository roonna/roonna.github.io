$(function() {
	$("#blog_history_toggle").click(function() {
		hideAll();
		$("#blog_history_toggle").addClass("selected");
		$("#blog_history").removeClass("hidden");
		$("#blog_history_graphic").removeClass("hidden");
	});
});

$(function() {
	$("#blog_recipe_toggle").click(function() {
		hideAll();
		$("#blog_recipe_toggle").addClass("selected");
		$("#blog_recipe").removeClass("hidden");
		$("#blog_recipe_graphic").removeClass("hidden");
	});
});


$(function() {
	$("#blog_tapioca_toggle").click(function() {
		hideAll();
		$("#blog_tapioca_toggle").addClass("selected");
		$("#blog_tapioca").removeClass("hidden");
		$("#blog_tapioca_graphic").removeClass("hidden");
	});
});


function hideAll(){
	$(".blog_text").children().addClass("hidden");
	$(".blog_graphic").children().addClass("hidden");
	$(".blog_links").children().removeClass("selected");
}