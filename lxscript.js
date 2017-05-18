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
			$('#nav-pane').css('padding-left', '15px').css('padding-bottom', '15px');
			$('#content-pane').css('height', '70%');
			$('.panebox').css('margin-top', '5%');
			$('.panebox').css('margin-left', '10%');
			$('.panebox').css('margin-right', '10%');
			$('#header-row').css('height', '50%');

			// $('#links-row').css('display', 'flex');
			$('#name-header').replaceWith("<h3 id='name-header'> Leslie Xiong </h3>");
			$('#name-header').css('margin-top', 0);
			$('#links-row').unwrap();
			$('#links-row').css('padding-left', '15px').css('padding-right', '15px');

			$('#About').unwrap().replaceWith("<h5 class='col-xs-4 group-1' id='About'> About </h5>");
			$('#Gerbil').unwrap().replaceWith("<h5 class='col-xs-4 group-1' id='Gerbil'> Gerbil </h5>");
			$('#Github').unwrap().replaceWith("<h5 class='col-xs-4 group-1' id='Github'> Github </h5>");
			$('#LinkedIn').unwrap().replaceWith("<h5 class='col-xs-6 group-2' id='LinkedIn'> LinkedIn </h5>");
			$('#Contact').unwrap().replaceWith("<h5 class='col-xs-6 group-2' id='Contact'> Contact </h5>");

			$('.group-1').wrapAll("<div class='row group-row'></div>");
			$('.group-2').wrapAll("<div class='row group-row'></div>");
			$('.group-row').css('display', 'flex');

			$('#nav-pane').css('color', '#809fff');
			$('#links-row h5').css('color', '#809fff');
			$('#links-row h5').css('text-align', 'center');
			$('#LinkedIn').css('margin-top', '5px');
			$('#Contact').css('margin-top', '5px');

			$('#about').css('margin-top', '20px').css('line-height', '50px');
			$('#gerbil').css('margin-top', '20px');
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

	$('#Github').click(function(){
		window.open('https://github.com/lesliebear', '_blank');
	});

	$('#LinkedIn').click(function(){
		window.open('https://www.linkedin.com/in/leslie-xiong-458b05100', '_blank');
	});
	
});
