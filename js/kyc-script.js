$(document).on('pageinit', function(){

   document.addEventListener("touchstart", function(){ });
   var _gaq = _gaq || [];

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    $('[data-role=page]').live('pageshow', function (event, ui) {
    try {
        _gaq.push(['_setAccount', 'UA-36474427-1']);

        hash = location.hash;

        if (hash) {
            _gaq.push(['_trackPageview', hash.substr(1)]);
        } else {
            _gaq.push(['_trackPageview']);
        }
    } catch(err) {

    }

});
              
 });