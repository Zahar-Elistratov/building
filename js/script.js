$(document).ready(function(){
	// слайдер
	$(".testimoni__slider").slick({
		arrows: false,
		dots: true,

		slidesToShow: 3,
		slidesToScroll: 3,

		speed: 300,
		easing: "ease",

		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},

			{
				breakpoint: 560,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  },
		]
	});

	// бургер
	$(".burger").click(() => {
		$(".menu-burger").toggleClass("menu-show")
		$("body").toggleClass("stop-scrolling")
	})
});