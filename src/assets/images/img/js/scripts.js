/*	Sticky navbar	*/
$('#document').ready(function () {
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
	var stickyHeight = sticky.outerHeight();
	var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
		}
		else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
		}
	};
       // Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
			sticky.before(stickyWrapper);
			sticky.addClass('sticky');
			// Scroll & resize events
			$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});
		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
	});
});

/*	Start Carousel	*/
	$('#carousel-test').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 5;
	    var totalItems = $('.carousel-item').length;
	    
	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(0).appendTo('.carousel-inner');
	            }
	        }
	    }
	});
/*	End Carousel	*/	

/*	Clear text box	*/		
	$('#document').ready(function(){
	    $('#btnCancel').on('click', function(){
	        $('.input').val('');
	    });
	});
/*	End Clear text box	*/
	
	var parentImage = document.getElementById('SIparent');
	var slide1 = document.getElementById('Slide1');
	var slide2 = document.getElementById('Slide2');
	var slide3 = document.getElementById('Slide3');
	var slide4 = document.getElementById('Slide4');
	var slide5 = document.getElementById('Slide5');
	var slide6 = document.getElementById('Slide6');
	var slide7 = document.getElementById('Slide7');
	var slide8 = document.getElementById('Slide8');

	var btnslide1 = document.getElementById('btnslide1');
	var btnslide2 = document.getElementById('btnslide2');
	var btnslide3 = document.getElementById('btnslide3');
	var btnslide4 = document.getElementById('btnslide4');
	var btnslide5 = document.getElementById('btnslide5');
	var btnslide6 = document.getElementById('btnslide6');
	var btnslide7 = document.getElementById('btnslide7');
	var btnslide8 = document.getElementById('btnslide8');

	slide1.style.display="none";
	slide2.style.display="none";
	slide3.style.display="none";
	slide4.style.display="none";
	slide5.style.display="none";
	slide6.style.display="none";
	slide7.style.display="none";
	slide8.style.display="none";

	function resetimg() {
		slide1.style.display = "none";
	    slide2.style.display = "none";
	    slide3.style.display = "none";
	    slide4.style.display = "none";
	    slide5.style.display = "none";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "none";
		parentImage.style.display = "block";
	}
		
	btnslide1.onmouseover=function() {
	    //debugger;
	    parentImage.style.display = "none";
	    slide1.style.display = "block";
	    slide2.style.display = "none";
	    slide3.style.display = "none";
	    slide4.style.display = "none";
	    slide5.style.display = "none";
	    slide6.style.display = "none";
	    slide7.style.display = "none";
	    slide8.style.display = "none";
	};
	btnslide2.onmouseover=function(){
	    parentImage.style.display = "none";
	    slide1.style.display = "none";
	    slide2.style.display = "block";
	    slide3.style.display = "none";
	    slide4.style.display = "none";
	    slide5.style.display = "none";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "none";
	};
	btnslide3.onmouseover=function() {
	    parentImage.style.display = "none";
	    slide1.style.display = "none";
	    slide2.style.display = "none";
	    slide3.style.display = "block";	    
	    slide4.style.display = "none";
	    slide5.style.display ="none";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "none";
	};
	btnslide4.onmouseover=function() {
		parentImage.style.display = "none";
	    slide1.style.display = "none";
	    slide2.style.display = "none";
	    slide3.style.display = "none";
	    slide4.style.display = "block";	    
	    slide5.style.display = "none";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "none";
	};
	btnslide5.onmouseover=function() {
	    parentImage.style.display = "none";
	    slide1.style.display = "none";
	    slide2.style.display = "none";
	    slide3.style.display = "none";
	    slide4.style.display = "none";
	    slide5.style.display = "block";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "none";
	};
	btnslide6.onmouseover=function() {
		parentImage.style.display = "none";
	    slide1.style.display = "none";
	    slide2.style.display = "none";
	    slide3.style.display = "none";
	    slide4.style.display = "none";	    
	    slide5.style.display = "none";
	    slide6.style.display = "block";
	    slide7.style.display = "none";
	    slide8.style.display = "none";
	};
	btnslide7.onmouseover=function() {
		parentImage.style.display = "none";
		slide1.style.display = "none";
		slide2.style.display = "none";
		slide3.style.display = "none";
		slide4.style.display = "none";		
		slide5.style.display = "none";
		slide6.style.display = "none";
		slide7.style.display = "block";
		slide8.style.display = "none";
	};
	btnslide8.onmouseover=function() {
		parentImage.style.display = "none";
		slide1.style.display = "none";
		slide2.style.display = "none";
		slide3.style.display = "none";
		slide4.style.display = "none";		
		slide5.style.display = "none";
		slide6.style.display = "none";
		slide7.style.display = "none";
		slide8.style.display = "block";		
	};
/*	End Image MouseOver Slider  */
	
/*	Download PDF Scripts  */
	
	var p1 = document.getElementById('clonester');
	var p2 = document.getElementById('lapster');
	var p3 = document.getElementById('cubester');
	var p4 = document.getElementById('cubester X');
	var p5 = document.getElementById('roadster');
	var p6 = document.getElementById('roadsterX');
	var p7 = document.getElementById('desksterX');
	var p8 = document.getElementById('desksterXTRaid');
	var p9 = document.getElementById('desksterxAdr');
	var p10 = document.getElementById('desksterClassic');
	var p11 = document.getElementById('desksterLite');
	var p12 = document.getElementById('desksterServer');
	var p13 = document.getElementById('desksterDual');
	var p14 = document.getElementById('graphsterR');
	var p15 = document.getElementById('graphsterT');
	var p16 = document.getElementById('labster');
	var p17 = document.getElementById('rackster');
		
	p1.style.display = 'block';
	p2.style.display = 'none';
	p3.style.display = 'none';
	p4.style.display = 'none';
	p5.style.display = 'none';
	p6.style.display = 'none';
	p7.style.display = 'none';
	p8.style.display = 'none';
	p9.style.display = 'none';
	p10.style.display = 'none';
	p11.style.display = 'none';
	p12.style.display = 'none';
	p13.style.display = 'none';
	p14.style.display = 'none';
	p15.style.display = 'none';
	p16.style.display = 'none';
	p17.style.display = 'none';
	
	function showClonester() {
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'block';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};

	function showLapster() {			
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'block';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showCubester() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'block';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};

	function showCubesterX() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'block';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showRoadster() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'block';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showRoadsterX() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'block';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterX() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'block';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterXTRaid() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'block';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterxAdr() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'block';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterClassic() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'block';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterLite() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'block';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterServer() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'block';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showDesksterDual() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'block';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showGraphsterR() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'block';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showGraphsterT() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
		
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'block';
		p16.style.display = 'none';
		p17.style.display = 'none';
	};
	
	function showLabster() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'block';
		p17.style.display = 'none';
	};
	
	function showRackster() {				
		var p1 = document.getElementById('clonester');
		var p2 = document.getElementById('lapster');
		var p3 = document.getElementById('cubester');
		var p4 = document.getElementById('cubesterX');
		var p5 = document.getElementById('roadster');
		var p6 = document.getElementById('roadsterX');
		var p7 = document.getElementById('desksterX');
		var p8 = document.getElementById('desksterXTRaid');
		var p9 = document.getElementById('desksterxAdr');
		var p10 = document.getElementById('desksterClassic');
		var p11 = document.getElementById('desksterLite');
		var p12 = document.getElementById('desksterServer');
		var p13 = document.getElementById('desksterDual');
		var p14 = document.getElementById('graphsterR');
		var p15 = document.getElementById('graphsterT');
		var p16 = document.getElementById('labster');
		var p17 = document.getElementById('rackster');
			
		p1.style.display = 'none';
		p2.style.display = 'none';
		p3.style.display = 'none';
		p4.style.display = 'none';
		p5.style.display = 'none';
		p6.style.display = 'none';
		p7.style.display = 'none';
		p8.style.display = 'none';
		p9.style.display = 'none';
		p10.style.display = 'none';
		p11.style.display = 'none';
		p12.style.display = 'none';
		p13.style.display = 'none';
		p14.style.display = 'none';
		p15.style.display = 'none';
		p16.style.display = 'none';
		p17.style.display = 'block';
	};
/*	End download PDF Scripts  */	

/*	Product Hide and Show  */	
	
	function showClonesterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
			
		img1.style.display = 'block';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}
	function showLapsterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'block';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showCubesterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'block';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showRoadsterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'block';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showDesksterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'block';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showGraphsterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'block';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showLapbsterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'block';
		img8.style.display = 'none';
		img9.style.display = 'none';
	}	
	function showRacksterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'block';
		img9.style.display = 'none';
	}	
	function showTracksterImage() {
		var img1 = document.getElementById('div1');
		var img2 = document.getElementById('div2');
		var img3 = document.getElementById('div3');
		var img4 = document.getElementById('div4');
		var img5 = document.getElementById('div5');
		var img6 = document.getElementById('div6');
		var img7 = document.getElementById('div7');
		var img8 = document.getElementById('div8');
		var img9 = document.getElementById('div9');
		
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';
		img5.style.display = 'none';
		img6.style.display = 'none';
		img7.style.display = 'none';
		img8.style.display = 'none';
		img9.style.display = 'block';
	}	
	