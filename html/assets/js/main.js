
var evt = new Event(),
m = new Magnifier(evt);
$(document).ready(function() {
	var click = false;
	init();

	m.attach({
	    thumb: '#thumb',
	    zoomable: true,
	    zoom:3,
	   // large: 'preview',
	    largeWrapper: 'preview'
	});
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
		dots: w < 768 ? true : false
	})
}

function restartImgOwl(){
	var img = $(".img-slider")
	if (img.closest('.owl-height').height() === 1) { img.closest('.owl-carousel').trigger('refresh.owl.carousel'); }
}

function magnifierInit(img){
	$(".magnifier-preview").find('img').attr('src', img);
}

$(".gallery-item").click(function(event) {
	$(".owl-gallery").find(".gallery-item").removeClass('active')
	$(this).addClass('active')
	var img = $(this).find('img').attr('src')
	$("#thumb").attr('src', img);
	magnifierInit(img);
});