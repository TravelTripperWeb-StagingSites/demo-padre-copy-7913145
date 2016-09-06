//Header 
$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	
	if(mscroll > 50){
		$(".nav-normal-scroll").addClass("showmenu");
		$(".banner-onscroll").addClass("-banner-onscroll-padding");
		
	}
	else{
		$(".nav-normal-scroll").removeClass("showmenu");
		$(".banner-onscroll").removeClass("-banner-onscroll-padding");
	}
	

	
	
	
	});
//Header 

//Responsive menu
$(document).ready(function() {
		$(".menu-icon-holder").click(function(){
			$(".header-nav-bar").slideToggle(300);
		});
	});
	
//back to top
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});