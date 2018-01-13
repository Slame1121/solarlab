$(document).ready(function(){

	var Why_it_the_best = {
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

			var sliders_sizes = {
				maxWidth: 665,
				maxHeight: 460
			},distance = 100;

			if($(window).width() <= 768){
				sliders_sizes = {
					maxWidth: 300,
					maxHeight: 270
				};
				distance = 5;
			}else{
				if($(window).width() <= 998){
					sliders_sizes = {
						maxWidth: 480,
						maxHeight: 410
					};
					distance = 15;
				}
			}

			$('#slider_1').carousel({
				num: 3,
				maxWidth: sliders_sizes['maxWidth'],
				maxHeight: sliders_sizes['maxHeight'],
				distance: distance,
				scale: 0.6,
				autoPlay: true,
				animationTime: 500,
				showTime: 4000
			});
		},

		faq: function () {
			$('.faq_container-content__item-category__questions-item__title').on('click', function(){
				$(this).parent().toggleClass('opened').find('.faq_container-content__item-category__questions-item__content').slideToggle();
			})
		},
		chooseStation: function () {
			$('.choose_station_container-content').on('mouseover', '.choose_station_container-content__item', function(){
				$(this).parent().find('>div').removeClass('active');
				$(this).addClass('active');
			})
		},
		init: function(){
			this.setSliders();
			this.faq();
			this.chooseStation();
		}
	};
	Why_it_the_best.init();



});