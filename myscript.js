$(document).ready(function () {

    var quoteArray = [
["A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, those are the sacrifices that you have to make if you want to be an NBA basketball player.", "Jason Kidd"],
["I look at my jersey and see the NBA logo, I'm like, 'I didn't think I'd be here.", "Kevin Durant"],
["I knew it was time to retire when I was driving down the lane and got called for a three-second violation.", " Johnny Kerr, former NBA player and coach "]
            ];


    $(".generate").on('click', function () {

        var num = Math.floor(Math.random() * quoteArray.length) + 1;

        $('.quote').text(quoteArray[num][0]);
        $('.author').text(quoteArray[num][1]);
    });

});