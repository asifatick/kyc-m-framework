$(document).bind('mobileinit', function () {
	$.support.cors=true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.pushStateEnabled= false;
    $.mobile.zoom.enabled = false;
    $.mobile.ignoreContentEnabled= true;
    $.mobile.buttonMarkup.hoverDelay = 20; //defaults 200
    $.mobile.defaultDialogTransition = 'none';
    $.mobile.defaultPageTransition = 'slide';
    $.support.touchOverflow = true;
  	$.mobile.touchOverflowEnabled = false;
  	$.mobile.loader.prototype.options.text = "loading";
  	$.mobile.loader.prototype.options.textVisible = false;
  	$.mobile.loader.prototype.options.theme = "a";
  	$.mobile.loader.prototype.options.html = "";
});

$(document).on('pageinit', function(){
    $('[data-position=fixed]').fixedtoolbar({ tapToggle:false });
 });