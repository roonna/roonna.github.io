$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('header').css('background-color','#222');
	} else {
		$('header').css('background-color','transparent');
		$('header').children("a").css('color','#524439');
	}
});
