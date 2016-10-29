/**
 * Created by sophia on 10/18/16.
 */
var quote = ['<i class="fa fa-quote-left"></i> I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it. <i class="fa fa-quote-right"></i><br> <i> -Bill Gates </i>','<i class="fa fa-quote-left"></i> Opportunities are usually disguised as hard work, so most people don\'t recognize them. <i class="fa fa-quote-right"></i><br> <i> -Ann Landers </i>', '<i class="fa fa-quote-left"></i> You are never too old to set another goal or to dream a new dream. <i class="fa fa-quote-right"></i><br><i> -C.S. Lewis</i>'];
var colors = ['#000099', '#00b3b3', '#00b33c', '#ffff66', '#ff751a', '#b30000', '#e60073', '#aa00ff'];

function randomKey(arr) {
    return Math.floor(Math.random() * arr.length);
}

function removeTags(html)
{
    return html.replace(/<(?:.|\n)*?>/gm, '');
}
$(document).ready(function() {
    $("#newQuote").on("click", function() {
        var quoteIndex = randomKey(quote);
        $('.quote').html(quote[quoteIndex]);
    });

    $('#newQuote').on("click", function(event) {
        console.log(event);
        event.preventDefault();
        var colorIndex = randomKey(colors);
        $("html body, .btn").css({background: colors[colorIndex]});
        $(".quote").css({color: colors[colorIndex]});
        $(".btn, .tweetButton").css({color: '#ffffff'});
    });

    $('a.tweetButton').click(function(){
        if(!index) return false;
        var link = 'http://twitter.com/home/?status=' + quote[index];
        $(this).attr('href', removeTags(link));
    });

});