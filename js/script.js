jQuery(document).ready(function($) {
	// initialize stellar
        $(window).stellar({
            verticalOffset: -1500
        });
        
        // set the height of the front page to the height of the screen
        var front_page = $('#front-page');
        var last_page = $('#page-4');
        resize_to_window_height(last_page);
        resize_to_window_height(front_page);
        function resize_to_window_height(selector) {
            console.log(selector);
            selector.css('height', ($(window).height()));
            $(window).resize(function() {
                selector.css('height', ($(window).height()));
            });
        }
        
        
        
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