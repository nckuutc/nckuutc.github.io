// Typr animation
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {

};


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
            $bg.removeClass()
                .addClass('bgheight');
        } else {
            $bg.removeClass()
                .addClass('bgwidth');
        }

        $('.slideshow').cycle({
            timeout: 9000
        });
    }

    theWindow.resize(resizeBg).trigger('resize');
});
