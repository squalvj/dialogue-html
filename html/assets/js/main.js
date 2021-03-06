
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
	var feather = $(".preview-gallery > a").attr('href', src);
	img.attr('src', '...');
	img.hide();
	img.attr('src', src);
	$(".gallery-loader").css('display','flex');
	img.on('load', function(){
		$(".gallery-loader").css('display','none');
		img.show();
	})
	
});

$(".hamburger").click(function(event) {
	$(".nav-mobile").addClass('active')
	$("body").addClass('no-scroll')
});

$(".close-nav").click(function(event) {
	$(".nav-mobile").removeClass('active')
	$("body").removeClass('no-scroll')
});

$(".dropdown").click(function(event) {
	$(this).toggleClass('active');
})

$(".util-img").click(function(event) {
	var parent = $(this).parent('.search-btn')
	if (parent.find('.search-bar').hasClass('active')){
		parent.find('.search-bar').removeClass('active')
	}else{
		parent.find('.search-bar').addClass('active');
	}
	if (parent.find('input').val() == ''){
		return;
	}else{
		$("#search-form").submit();
		console.log("SUBMIT")
	}
});

$(".search-btn input").click(function(e) {
    e.stopPropagation();
});

$(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.search-btn') && !$(target).parents().is('.search-btn')) {
        $(".search-bar").removeClass('active')
        $("#search-form input").val("")
    }
});