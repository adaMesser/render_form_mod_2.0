(function ($) {
    'use strict';

    Drupal.behaviors.testScript2 = {
        attach: function (context, settings) {
            alert('js is attached!!!:)');
        }
    };
}(jQuery));
