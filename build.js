


// toggle open and close lists
// TEA LIST
$(function() {
	$("#tea_toggle").click(function() {
		toggleSection($("#tea_toggle"), $("#tea_list"));
	});
});
$(function() {
	$("#tea_title").click(function() {
		toggleSection($("#tea_toggle"), $("#tea_list"));
	});
});

// TOPPINGS LIST
$(function() {
	$("#topping_toggle").click(function() {
		toggleSection($("#topping_toggle"), $("#topping_list"));
	});
});
$(function() {
	$("#topping_title").click(function() {
		toggleSection($("#topping_toggle"), $("#topping_list"));
	});
});

// EXTRA LIST
$(function() {
	$("#extra_toggle").click(function() {
		toggleSection($("#extra_toggle"), $("#extra_list"));
	});
});
$(function() {
	$("#extra_title").click(function() {
		toggleSection($("#extra_toggle"), $("#extra_list"));
	});
});

function toggleSection(arrow, content){
		if(!$(content).hasClass("open")){
			$(content).addClass("open");
			// $(".class-list").css('transition','height .4s ease');
			// $(".class-list").css('height','auto');
			$(arrow).css('transform','scaleY(-1)');
		} else {
			$(content).removeClass("open");
			// $(".class-list").css('transition','height .4s ease');
			// $(".class-list").css('height','0');
			$(arrow).css('transform','scaleY(1)');
		}
};


var currentTea = 0;
var currentTopping = [];
var currentExtra = [];

// toggle tea types
// TEA TYPES
$(function() {
	$("#tea_milk").click(function() {
		console.log(1);
		if (toggleTea($("#tea_milk"), $("#tea_list").children(), $("#graphic_tea")) == 1){
			$("#graphic_tea").css('background-image','url("images/tea_milk.png")');
		}
	});
});
$(function() {
	$("#tea_taro").click(function() {
		if (toggleTea($("#tea_taro"), $("#tea_list").children(), $("#graphic_tea")) == 1){
			$("#graphic_tea").css('background-image','url("images/tea_taro.png")');
		}
	});
});
$(function() {
	$("#tea_green").click(function() {
		if (toggleTea($("#tea_green"), $("#tea_list").children(), $("#graphic_tea")) == 1){
			$("#graphic_tea").css('background-image','url("images/tea_green.png")');
		}
	});
});



function toggleTea(option, group, layer){
	if($(option).hasClass("selected")){
		// deselect text
		$(option).removeClass("selected");
		// hide graphic
		$(layer).css('background-image','url("images/clear.png")');
		// currentTea = 0;
		return 0;
	} else {
		// deselect all other text
		$(group).removeClass("selected");
		
		show($(option));
		// currentTea = 1;
		return 1;
	}
}




// toggle topping types
// TOPPING TYPES
$(function() {
	$("#topping_tapioca").click(function() {
		if (toggleTopping($("#topping_tapioca"), $("#graphic_toppings_tapioca")) == 1){
			$("#graphic_toppings_tapioca").css('background-image','url("images/toppings_tapioca.png")');
		}
	});
});
$(function() {
	$("#topping_aloe").click(function() {
		if (toggleTopping($("#topping_aloe"), $("#graphic_toppings_aloe")) == 1){
			$("#graphic_toppings_aloe").css('background-image','url("images/toppings_aloe.png")');
		}
	});
});
$(function() {
	$("#topping_cheese").click(function() {
		if (toggleTopping($("#topping_cheese"), $("#graphic_toppings_cheese")) == 1){
			$("#graphic_toppings_cheese").css('background-image','url("images/toppings_cheese.png")');
		}
	});
});

$(function() {
	$("#extra_sugar").click(function() {
		if($("#extra_sugar").hasClass("selected")){
			$("#extra_sugar").removeClass("selected");
		} else {	
			show($("#extra_sugar"));
		}
	});
});
$(function() {
	$("#extra_ice").click(function() {
		if (toggleTopping($("#extra_ice"), $("#graphic_extra_ice")) == 1){
			$("#graphic_extra_ice").css('background-image','url("images/extra_ice.png")');
		}
	});
});


function toggleTopping(option, layer) {
	if($(option).hasClass("selected")){
		// deselect text
		$(option).removeClass("selected");
		// hide graphic
		$(layer).css('background-image','url("images/clear.png")');
		return 0;
	} else {	
		show($(option));
		return 1;
	}
}



function show(option){
	// select this text
	$(option).addClass("selected");
}

// $(document).ready(function() {
// $('body').click(function(e) {
//   console.log(e);
// });
// });