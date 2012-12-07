$(document).on("pageinit", function(e){
               
               $("#"+ $(e.target).attr('id') +" :jqmData(slidemenu)").addClass('slidemenu_btn');
               var sm = $($("#"+ $(e.target).attr('id') +" :jqmData(slidemenu)").data('slidemenu'));
               sm.addClass('slidemenu');
               
               $(document).on("click",".ui-page-active", function(e){
                              if (sm.data('slideopen')) {
                              $(".ui-page-active :jqmData(role='header')").removeClass('ui-fixed-hidden');
                              }
                              });
               
               
               
               $(document).on("click", ".ui-page-active :jqmData(slidemenu)", function(e) {
                              slidemenu(sm, sm.data('slideopen'));
                              e.stopImmediatePropagation();
                              e.preventDefault();
                              });
               /*$(document).on("click", ".slidemenu ul li > a", function(e) {
                slidemenu(sm, false);
                });*/
               
               
               
               $(document).on("click", "a:not(:jqmData(slidemenu)):not(.slidemenu ul li:last-child a, .ui-popup-container .kyc-btn)", function(e) {
                              slidemenu(sm, true);
                              });
               
               $(window).on('resize', function(e){
                            if (sm.data('slideopen')) {
                            console.log('sd');
                            //sm.css('top', getPageScroll()[1] + 'px');
                            sm.css('width', '240px');
                            sm.height(viewport().height);
                            $(":jqmData(role='page')").css('left', '240px');
                            $("#liabilityInfoPage").css('left','0px');
                            $("#structureInfoPage").css('left','0px');
                            $("#belongingsInfoPage").css('left','0px');
                            $("#rentalInfoPage").css('left','0px');
                            $("#infoPage").css('left','0px');
                            $("#termsPage").css('left','0px');
                            $("#helpPage").css('left','0px');
                            }
                            });
               
               $(window).scroll(function() {
                                if (sm.data('slideopen')) {
                                //sm.css('top', getPageScroll()[1] + 'px');
                                }
                                });
               $('[data-role=footer]').fixedtoolbar({updatePagePadding: true});
               $('[data-role=header]').fixedtoolbar({ updatePagePadding: true });
               
               });

function slidemenu(sm, only_close) {
	sm.height(viewport().height);
	if (!sm.data('slideopen') && !only_close) {
		sm.show().animate({width: '240px', avoidTransforms: false, useTranslate3d: true}, 'fast');
        $('.ui-page-active').each(function(index) {
                $(this).css('left','240px');
                $(".score-container").css('left','240px');
                                  });
		//$(".ui-page-active").css('left', '240px');
		sm.data('slideopen', true);
		$('[data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        $('.ui-header .ui-btn-text').each(function(index) {
                                          $(this).text("BACK");
                                          $(this).text();
                                          });
        
        // $(".smenu").text("BACK");
		if ($(".ui-page-active .ui-content :jqmData(role='header')").data('position') == 'fixed') {
			$(".ui-page-active .ui-content :jqmData(slidemenu)").css('margin-left', '0px');
		} else {
			$(".ui-page-active .ui-content :jqmData(slidemenu)").css('margin-left', '10px');
		}
	} else {
		sm.animate({width: '0px', avoidTransforms: false, useTranslate3d: true}, 'fast', function(){sm.hide()});
        $('.ui-page-active').each(function(index) {
                                  $(this).css('left','0px');
                                  $(".ui-body-a").css('left','0px');
                                  $(".score-container").css('left','0px');
                                  });
		$(".ui-page-active").css('left', '0px');
        $(".score-container").css('left','0px');
		$('[data-role=header]').find('span.ui-icon').removeClass('ui-icon-smico-back');
        $('#infoPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
		$('#termsPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        $('#structureInfoPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        $('#rentalInfoPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        $('#liabilityInfoPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        $('#belongingsInfoPage [data-role=header]').find('span.ui-icon').addClass('ui-icon-smico-back');
        
        $('.ui-header .ui-btn-text').each(function(index) {
                                          $(this).text("MENU");
                                          $(this).text();
                                          });
        $('#infoPage .ui-header .ui-btn-text').each(function(index) {
                                          $(this).text("BACK");
                                          $(this).text();
                                          });
        $('#termsPage .ui-header .ui-btn-text').each(function(index) {
                                          $(this).text("BACK");
                                          $(this).text();
                                          });
        $('#structureInfoPage .ui-header .ui-btn-text').each(function(index) {
                                                     $(this).text("BACK");
                                                     $(this).text();
                                                     });
        $('#rentalInfoPage .ui-header .ui-btn-text').each(function(index) {
                                                     $(this).text("BACK");
                                                     $(this).text();
                                                     });
        $('#liabilityInfoPage .ui-header .ui-btn-text').each(function(index) {
                                                     $(this).text("BACK");
                                                     $(this).text();
                                                     });
        $('#belongingsInfoPage .ui-header .ui-btn-text').each(function(index) {
                                                     $(this).text("BACK");
                                                     $(this).text();
                                                     });
        // $(".smenu").text("MENU");
		sm.data('slideopen', false);
		$(".ui-page-active .ui-content :jqmData(slidemenu)").css('margin-left', '0px');
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