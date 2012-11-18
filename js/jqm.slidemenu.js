$(document).on("pageinit", function(e){

	$("#"+ $(e.target).attr('id') +" :jqmData(slidemenu)").addClass('slidemenu_btn');
	var sm = $($("#"+ $(e.target).attr('id') +" :jqmData(slidemenu)").data('slidemenu'));
	sm.addClass('slidemenu');
	

	$(document).on("click", ".ui-page-active :jqmData(slidemenu)", function(e) {
		slidemenu(sm, sm.data('slideopen'));
		e.stopImmediatePropagation();
		e.preventDefault();
	
	});
	
	$(document).on("click", "a:not(:jqmData(slidemenu))", function(e) {
		slidemenu(sm, true);
		
	});

	$('[data-role=footer]').fixedtoolbar({updatePagePadding:false});
    $('[data-role=header]').fixedtoolbar({ updatePagePadding: false });

});

function slidemenu(sm, only_close) {
	sm.height(viewport().height);
	if (!sm.data('slideopen') && !only_close) {
		sm.show().animate({width: '240px', avoidTransforms: false, useTranslate3d: true}, 'fast');
		$(".ui-content").css('left', '240');
		sm.data('slideopen', true);
			$(".smenu").text("BACK");
		if ($(".ui-page-active :jqmData(role='header')").data('position') == 'fixed') {
			$(".ui-content :jqmData(slidemenu)").css('margin-left', '250px');
		} else {
			$(".ui-content :jqmData(slidemenu)").css('margin-left', '10px');
		}

	} else {
		sm.animate({width: '0px', avoidTransforms: false, useTranslate3d: true}, 'fast', function(){sm.hide()});
		$(".ui-page-active").css('left', '0px');
		sm.data('slideopen', false);
		$(".ui-page-active :jqmData(slidemenu)").css('margin-left', '0px');
		$(".smenu").text("MENU");
		
	}
	
	return false;
}

function viewport(){
	var e = window;
	var a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
}