
$(document).ready(function() {
	var click = false;
	init()
	var w = $(window).width();
});

function init(){
 	setCarouselHome();
 	restartImgOwl();
 	setGallerySingle();
}

function setCarouselHome(){
	var nav = ["<img src='assets/img/left-arrow.png'>", "<img src='assets/img/right-arrow.png'>"]
    var navC = '#navigasi-owl';
 	$('#carousel-home').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	 	autoHeight:true,
		navContainer: navC,
		navText: nav,
	})
}

function setGallerySingle(){
	var w = $(window).width();
	var nav = ["<button><i class='fa fa-caret-left' aria-hidden='true'></i></button>", "<button><i class='fa fa-caret-right' aria-hidden='true'></i></button>"]
    var navC = '.navigasi-gallery';
	$('.owl-gallery').owlCarousel({
	    margin:10,
	    autoHeight:true,
	    nav:true,
	    items:5,
	    navContainer: navC,
		navText: nav,
		dots: w < 768 ? true : false,
		responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        768:{
	            items:3,
	        },
	        1000:{
	            items:5,
	        }
    	}
	})
}

function restartImgOwl(){
	var img = $(".img-slider")
	if (img.closest('.owl-height').height() === 1) { img.closest('.owl-carousel').trigger('refresh.owl.carousel'); }
}


$(".gallery-item").click(function(event) {
	$(".owl-gallery").find(".gallery-item").removeClass('active')
	$(this).addClass('active')
	var src = $(this).find('img').attr('src')
	var img = $("#thumb")
	img.attr('src', '...');
	img.hide();
	img.attr('src', src);
	$(".gallery-loader").css('display','flex');
	img.on('load', function(){
		$(".gallery-loader").css('display','none');
		img.show();
	})
	
});