jQuery(document).ready(function($) {
	// initialize stellar
        $(window).stellar();
        
        // set the height of the front page to the height of the screen
        var selector = $('#front-page');
        selector.css('height', ($(window).height()));
        $(window).resize(function() {
            selector.css('height', ($(window).height()));
        });
        
        
        $(window).scroll(function() {
            
        });
        /*
        var thisHeight;
        $('.picture-text').each(function() {
            thisHeight = ($(this).height())/2*(-1);
            $('.picture-text').css('marginTop', thisHeight);
        });
        */
        
});