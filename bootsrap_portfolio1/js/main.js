$(document).ready(function(){
	$('.btn_menu').click(function(){
		$('.menu ul').slideToggle();
	});

	 $("#owl-example").owlCarousel({
	 	items: 1,
	 	itemsDesktop: [1199,1],
	 	itemsDesktopSmall: [980,1],
    	itemsTablet: [768,1],
    	itemsMobile: [479,1],
    	navigation: true,
    	navigationText : false
	 });
/*сязываем якоря*/
	 $('#Container').mixItUp();

	  $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault(); 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });


      $("#top_button").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault(); 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(this).offset().top;

             $('html,body').animate({ scrollTop: 0 }, 'slow');
        });
         



});