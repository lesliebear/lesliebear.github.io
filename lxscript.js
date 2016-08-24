$(document).ready(function(){
	$('#About').click(function(e){
		e.preventDefault();
		$('#gerbil').hide();
		$('#gerbildiv').hide();
		$('#gerbildiv').slimScroll({destroy: true});
		$('#contact').hide();
		$('#about').fadeIn('slow','swing');
	});	

	$('#Gerbil').click(function(e){
		e.preventDefault();
		$('#about').hide();
		$('#contact').hide();
		$('#gerbildiv').show();
		$('#gerbil').fadeIn('slow','swing');		
		$('#gerbildiv').slimScroll({
			height: 'auto'
		});
	});

	$('#Contact').click(function(e){
		e.preventDefault();
		$('#about').hide();
		$('#gerbildiv').hide();
		$('#gerbildiv').slimScroll({destroy: true});
		$('#gerbil').hide();
		$('#contact').fadeIn('slow','swing');
	});

	$(".imgSmall").click(function(){
		var thissrc = $(this).attr('src');
		$("#imgBig").attr("src", thissrc);
		$("#overlay").show();
		$("#overlayContent").show();
	});

	$("#imgBig").click(function(){
		$("#imgBig").attr("src", "");
		$("#overlay").hide();
		$("#overlayContent").hide();
	});
});
