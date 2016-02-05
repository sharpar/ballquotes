//$(document).ready(getQuote);


$(document).ready(function () {
    $('.icon').fadeIn('slow');
});

quoteArray = [
["A lot of late nights in the gym, a lot of early mornings, especially when your friends are going out, you're going to the gym, those are the sacrifices that you have to make if you want to be an NBA basketball player.", "Jason Kidd"],
["I look at my jersey and see the NBA logo, I'm like, 'I didn't think I'd be here.", "Kevin Durant"]];


$(".generate").click(function () {
    $('.quote').text(quoteArray[0][0]);
})