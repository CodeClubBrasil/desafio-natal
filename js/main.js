$(document).ready(function() {

	$('.btn-link').click(function() {

		console.log("CLICK");

		var areaId = $(this).attr('href');
		
		$('body').scrollTo( areaId, 1000, { offset: 0 } );//add or deduct from the final position	
	});    



	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  
	  // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.	  
	  midClick: true, 
  	  
	  // Delay in milliseconds before popup is removed
  	  removalDelay: 300, 

	  // Class that is added to popup wrapper and background
	  // make it unique to apply your CSS animations just to this exact popup
	  mainClass: 'mfp-fade'
	});

});