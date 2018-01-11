$(document).ready(function(){

	var Main = {
		initHeaderMenu: function () {
			//responsive
			$('.headblock-item_nav-menutoggler').on('click', function(){
				$('.response_dropdown_menu').slideToggle('fast');
				if($('#header').css('background-color') == 'rgb(0, 0, 0)'){
					$('#header').css('background-color','rgba(4, 15, 22, 0.7)');
				}else{
					$('#header').css('background-color','#000');
				}

			});
			//fixed
			$(window).bind('scroll', function () {
				if ($(window).scrollTop() > 0) {
					$('#header').addClass('fixed');

				} else {
					$('#header').removeClass('fixed');
				}
			});
		},
		init: function(){
			this.initHeaderMenu();
		}
	};
	Main.init();
});