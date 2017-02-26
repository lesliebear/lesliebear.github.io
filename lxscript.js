$(document).ready(function(){
	function displayContent(div_id, content_id) {
		$('.section').hide();
		$(div_id).show();
		$(content_id).fadeIn('slow', 'swing');
	}

	function resetDisplay(){
		if($(this).width() <= 800){
			$('#nav-pane').unwrap();
			$('#nav-pane').css('height', '20%');
			$('#content-pane').css('height', '70%');
			$('.panebox').css('margin-top', '5%');
			$('.panebox').css('margin-left', '10%');
			$('.panebox').css('margin-right', '10%');
			$('#links-row').css('display', 'flex');
			$('#name-header').replaceWith("<h3 id='name-header'> Leslie Xiong </h3>");
			$('#name-header').css('margin-top', 0);
			$('#links-row').unwrap();
			$('#About').unwrap().replaceWith("<h4 id='About'> About </h4>");
			$('#Gerbil').unwrap().replaceWith("<h4 id='Gerbil'> Gerbil </h4>");
			$('#Contact').unwrap().replaceWith("<h4 id='Contact'> Contact </h4>");
			$('#Github').unwrap();
			$('#LinkedIn').unwrap();
			$('#Github h3').replaceWith("<h4> Github </h4>");
			$('#LinkedIn h3').replaceWith("<h4> LinkedIn </h4>");
			$('#links-row row').css('margin', 0);
			$('#links-row h4').css('margin-right', '2%');
			$('#links-row a').css('margin-right', '2%');
			$('#nav-pane').css('color', '#809fff');
			$('#links-row h4').css('color', '#809fff');
		}
	}

	resetDisplay();

	$('#scrolldiv').slimScroll({
		height: 'auto'
	});

	setTimeout(function(){
		$('#About').trigger('click');
	}, 300);

	$('#About').click(function(){
		displayContent('#aboutdiv', '#about');
	});	

	$('#Gerbil').click(function(){
		displayContent('#gerbildiv', '#gerbil');	
	});

	$('#Contact').click(function(){
		displayContent('#contactdiv', '#contact');
	});

	$(".imgSmall").click(function(){
		var thissrc = $(this).attr('src');
		$("#imgBig").attr("src", thissrc);
		$("#overlayContent").show();
	});

	$("#overlayContent").click(function(){
		$("#imgBig").attr("src", "");
		$("#overlayContent").hide();
	});

	$(window).resize(function(){
		var h=$('#content-pane').height();
		$('#scrolldiv').height(h);
		$('.slimScrollDiv').height(h);
		resetDisplay();
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
