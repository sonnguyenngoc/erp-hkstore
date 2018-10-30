/* Add Custom Code Jquery
 ========================================================*/
$(document).ready(function(){
	// Fix hover on IOS
	$('body').bind('touchstart', function() {}); 
	








	// Close pop up countdown
	 $( "#so_popup_countdown .customer a" ).click(function() {
	  $('body').toggleClass('hidden-popup-countdown');
	 });
	// =========================================


	// click header search header 
	jQuery(document).ready(function($){
		$( ".search-header-w .icon-search" ).click(function() {
		$('#sosearchpro .search').slideToggle(200);
		$(this).toggleClass('active');
		});
	});

	// add class Box categories
	jQuery(document).ready(function($){

		if($("#accordion-category .panel .panel-collapse").hasClass("in")){
			$('#accordion-category .panel .accordion-toggle').addClass("show");			
		} 
		else{
			$('#accordion-category .panel .accordion-toggle').removeClass("show");
		}

	});


	// custom to show footer center
	$(".button-toggle").click(function () {
		if($(this).children('.showmore').hasClass('active')) $(this).children().removeClass('active');
		else $(this).children().addClass('active');
		
		
		
		if($(this).prev().hasClass('showdown')) $(this).prev().removeClass('showdown').addClass('showup');
		else $(this).prev().removeClass('showup').addClass('showdown');
	}); 


	$(".content-product-content .button-toggle").click(function () {
		if($(this).children('.showmore').hasClass('active')) $(this).children().removeClass('active');
		else $(this).children().addClass('active');
		
		
		
		if($(this).prev().hasClass('showdown')) $(this).prev().removeClass('showdown').addClass('showup');
		else $(this).prev().removeClass('showup').addClass('showdown');
	}); 

	$(".clearable").each(function() {
  
	  var $inp = $(this).find("input:text"),
	      $cle = $(this).find(".clearable__clear");

	  $inp.on("input", function(){
	    $cle.toggle(!!this.value);
	  });
	  
	  $cle.on("touchstart click", function(e) {
	    e.preventDefault();
	    $inp.val("").trigger("input");
	  });
	  
	});

});
