(function($) {
	'use strict';
	jQuery(document).on('ready', function(){
		
		
		
		// Popup Image
        $('a[data-imagelightbox="popup-btn"]')
        .imageLightbox({
            activity: true,
            overlay: true,
            button: true,
            arrows: true
		});



	});

})(jQuery);