/*jslint browser: true*/
/*global $, jQuery, alert*/

/*var quoteArray = [
    ["A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, those are the sacrifices that you have to make if you want to be an NBA basketball player.", "Jason Kidd"],
    ["I look at my jersey and see the NBA logo, I'm like, 'I didn't think I'd be here.'", "Kevin Durant"],
    ["I knew it was time to retire when I was driving down the lane and got called for a three-second violation.", " Johnny Kerr"],
    ["They say that nobody is perfect. Then they tell you practice makes perfect. I wish they'd make up their minds.", "Wilt Chamberlain"],
    ["If I weren't earning $3 million a year to dunk a basketball, most people on the street would run in the other direction if they saw me coming.", "Charles Barkley"],
    ['The invention of basketball was not an accident. It was developed to meet a need. Those boys simply would not play "Drop the Handkerchief."', 'James Naismith'],
    ["These are my new shoes. They're good shoes. They won't make you rich like me, they won't make you rebound like me, they definitely won't make you handsome like me. They'll only make you have shoes like me. That's it.", "Charles Barkley"],
    ["It's all about manning up.", "Byron Scott - Tankmaster"]
];
*/

function getQuote() {
    'use strict';

    var quoteArray = [];

    $.get('quotes.txt', function (data) {
        quoteArray = data.split('\n');
        alert(quoteArray[1]);
    });

    var num = Math.floor(Math.random() * quoteArray.length);

    $('.full').fadeOut(function () {
        $('.quote').text(quoteArray[num]);
        //$('.author').text(quoteArray[num][1]);
    }).fadeIn();

    var quot = 'https://twitter.com/intent/tweet?text=' + quoteArray[num][0] + ' - ' + quoteArray[num][1];

    $(".twitter-share-button").attr("href", quot);
}

$(document).ready(function () {
    'use strict';

    getQuote();

    $(".generate").on('click', function () {
        getQuote();
        alert("The paragraph was clicked.");

    });


});