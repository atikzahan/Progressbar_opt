(function($) {
    'use strict';

    $(document).ready(function() {
        // init the percentage value and the progress bar base on the value of "aria-valuenow"
        $('.progress-bar').each(function(index, el) {
            var percentage = $(this).attr('aria-valuenow')? parseInt($(this).attr('aria-valuenow')) : 0;
            $(this).css('width', percentage + '%').prev('.progress-percentage').text(percentage + '%');
        });

        $('.progress-control').click(function(event) {
            var $currentProgress = $('#' + $('#current-progress').val()),
                $currentProgressBar = $currentProgress.children('.progress-bar'),
                valueChange = parseInt($(this).text()),
                valueNow = $currentProgressBar.attr('aria-valuenow')? parseInt($currentProgressBar.attr('aria-valuenow')) : 0;

                valueNow += valueChange;
                if (valueNow < 0) {
                    valueNow = 0;
                    $currentProgressBar.css('width', '0%');
                } else if (valueNow > 100) {
                    $currentProgressBar.css('width', '100%').addClass('overflow');
                } else {
                    $currentProgressBar.css('width', valueNow + '%').removeClass('overflow');
                }

                $currentProgressBar.attr('aria-valuenow', valueNow).prev('.progress-percentage').text(valueNow + '%');
        });
    });

})(jQuery);
