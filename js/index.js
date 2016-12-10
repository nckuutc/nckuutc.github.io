// Lock zoom
var zoomlevel = 1;

$('body').dblclick(function(ev) {
    zoomlevel = zoomlevel == 1 ? 2 : 1;

    $(this).css({
        '-moz-transform': 'scale(' + zoomlevel + ')',
        '-webkit-transform': 'scale(' + zoomlevel + ')',
        '-o-transform': 'scale(' + zoomlevel + ')',
        '-ms-transform': 'scale(' + zoomlevel + ')'
    });
});

// Scroll Reveal
window.sr = new scrollReveal(config);

var config = {
    easing: 'ease',
    reset: true
}

// Background slide
$(window).load(function() {
    var theWindow = $(window),
        $bg = $('.background'),
        aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {
        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg
                .removeClass()
                .addClass('bgheight');
        } else {
            $bg
                .removeClass()
                .addClass('bgwidth');
        }
    }

    theWindow.resize(resizeBg).trigger('resize');
});
