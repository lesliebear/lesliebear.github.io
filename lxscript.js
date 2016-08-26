$(document).ready(function(){
	$('#scrolldiv').slimScroll({
		height: 'auto'
	});

	$('#About').click(function(e){
		e.preventDefault();
		$('#gerbil').hide();
	//	$('#gerbildiv').hide();
	//	$('#gerbildiv').slimScroll({destroy: true});
		$('#contact').hide();
		$('#about').fadeIn('slow','swing');

	/*	if($(".mirror").css("position")=='relative'){
			$('#aboutdiv').slimScroll({
				height: 'auto'
			});
		}*/


	});	

	$('#Gerbil').click(function(e){
		e.preventDefault();
		$('#about').hide();
	//	$('#aboutdiv').hide();
	//	$('#aboutdiv').slimScroll({destroy:true});
		$('#contact').hide();
		$('#gerbildiv').show();
		$('#gerbil').fadeIn('slow','swing');		
	/*	$('#gerbildiv').slimScroll({
			height: 'auto'
		});*/
	});

	$('#Contact').click(function(e){
		e.preventDefault();
		$('#about').hide();
	//	$('#aboutdiv').hide();
	//	$('#aboutdiv').slimScroll
	//	$('#aboutdiv').slimScroll{destroy:true});
	//	$('#gerbildiv').hide();
	//	$('#gerbildiv').slimScroll({destroy: true});
		$('#gerbil').hide();
		$('#contact').fadeIn('slow','swing');
	});

	$(".imgSmall").click(function(){
		var thissrc = $(this).attr('src');
		$("#imgBig").attr("src", thissrc);
	//	$("#overlay").show();
		$("#overlayContent").show();
	});

	$("#imgBig").click(function(){
		$("#imgBig").attr("src", "");
	//	$("#overlay").hide();
		$("#overlayContent").hide();
	});

	$(window).resize(function(){
		var h=$('.mirror').height();
		$('#scrolldiv').height(h);
		$('.slimScrollDiv').height(h);
	});	

	$('.destroy').click(function(){
		$('.scrollable').slimScroll({
			destroy:true
		});

		var $elem = $('.scrollable'),
		events = jQuery._data( $elem[0], "events" );

		if (events) {
			jQuery._removeData( $elem[0], "events" );
		}
	});
	
});
