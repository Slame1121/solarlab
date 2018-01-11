$(document).ready(function(){

	var About_us = {
		setSliders: function () {

			var owl = $('#our_command_carousel');
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
						items: 2
					},
					1000: {
						items: 3
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
						items: 2
					},
					1000: {
						items: 3
					}
				}
			});
		},

		init: function(){
			this.setSliders();
		}
	};
	About_us.init();



});