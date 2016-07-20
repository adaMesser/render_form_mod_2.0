(function ($) {
    'use strict';

    Drupal.behaviors.testScript1 = {
        attach: function (context, settings) {
            var $placeholder = $('#edit-render-ex-mod-text')
                .attr('placeholder');
            console.log($placeholder);
        }
    };
}(jQuery));
