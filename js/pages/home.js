$(document).ready(function(){
	$('#slider_1').carousel({
		num: 3,
		maxWidth: 665,
		maxHeight: 460,
		distance: 100,
		scale: 0.6,
		autoPlay: false,
		animationTime: 1000,
		showTime: 4000
	});
	$('#slider_2').carousel({
		num: 3,
		maxWidth: 665,
		maxHeight: 460,
		distance: 100,
		scale: 0.6,
		autoPlay: false,
		animationTime: 1000,
		showTime: 4000
	});
	var owl = $('#reviews_carousel');
	owl.owlCarousel({
		margin: 10,
		nav: true,
		dots:true,
		loop: true,
		navText: ["<img src='images/left-arrow-white.png' />", "<img src='images/right-arrow-white.png' />"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	owl = $('#partners_slider');
	owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		items:3,
		navText: ["<img src='images/left-arrow.png' />", "<img src='images/right-arrow.png' />"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});
});