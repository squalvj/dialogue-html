$(document).ready(function() {
	init();
});

function init(){
 	setCarouselHome();
}

function setCarouselHome(){
	var nav = ["<img src='assets/img/left-arrow.png'>", "<img src='assets/img/right-arrow.png'>"]
    var navC = '#navigasi-owl';
	 $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	 	autoHeight:true,
		navContainer: navC,
		navText: nav,
	})
}