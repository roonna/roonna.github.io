

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == $("#myModal")) {
		$("#myModal").addClass("hidden");
  }
}


$(function() {
	$("#myBtn").click(function() {
		$("#myModal").removeClass("hidden");
	});
});

$(function() {
	$(".close").click(function() {
		$("#myModal").addClass("hidden");
	});
});


$(function() {
	$("#purchase_switch").click(function() {
		$("#build_content").addClass("hidden");
		$("#purchase_switch").addClass("hidden");
		$("#purchase_content").removeClass("hidden");
		$("#build_switch").removeClass("hidden");
	});
});

$(function() {
	$("#build_switch").click(function() {
		$("#purchase_content").addClass("hidden");
		$("#build_switch").addClass("hidden");
		$("#build_content").removeClass("hidden");
		$("#purchase_switch").removeClass("hidden");
	});
});


