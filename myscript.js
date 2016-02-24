/*jslint browser: true*/
/*global $, jQuery, alert*/

var quoteArray = [],
    num = 0,
    tweet;

function getQuote() {
    'use strict';

    $.get('quotes.txt', function (data) {
        quoteArray = data.split('\n');
    });

    num = (Math.floor(Math.random() * quoteArray.length / 2) * 2);

    $('.full').fadeOut(function () {
        $('.quote').text(quoteArray[num]);
        $('.author').text(quoteArray[num + 1]);
    }).fadeIn();

    tweet = 'https://twitter.com/intent/tweet?text=' + quoteArray[num] + ' - ' + quoteArray[num + 1];

    $(".twitter-share-button").attr("href", tweet);
}

$(document).ready(function () {
    'use strict';

    getQuote();

    $(".generate").on('click', function () {
        getQuote();

    });

});