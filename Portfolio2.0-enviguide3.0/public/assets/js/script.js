$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.navbar').addClass('blackto');
        } else {
            $('.navbar').removeClass('blackto');
        }
    });

    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});



function myFunction() {
    var t = document.getElementById("myInput");
    t.select(), t.setSelectionRange(0, 99999),
        navigator.clipboard.writeText(t.value)
}
// TxtType.prototype.tick = function () {
//     var t = this.loopNum % this.toRotate.length, e = this.toRotate[t];
//     this.isDeleting ? this.txt = e.substring(0, this.txt.length - 1) : this.txt = e.substring(0, this.txt.length + 1),
//         this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
//     var i = this, s = 200 - 100 * Math.random(); this.isDeleting && (s /= 2),
//         this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, s = 500) : (s = this.period, this.isDeleting = !0), setTimeout((function () { i.tick() }), s)
// },
//     window.onload = function () {
//         for (var t = document.getElementsByClassName("typewrite"), e = 0;
//             e < t.length; e++) {
//             var i = t[e].getAttribute("data-type"), s = t[e].getAttribute("data-period");
//             i && new TxtType(t[e], JSON.parse(i), s)
//         } var a = document.createElement("style");
//         a.type = "text/css", a.innerHTML = ".typewrite > .wrap { border-right: 2px solid #F4CD06}",
//             document.body.appendChild(a)
//     },
//     $(document).ready((function () {
//         $("#partners").owlCarousel({
//             loop: !0, margin: 10, nav: !0, rewind: !0, dots: !1, navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
//             autoplay: !0, autoPlay: 2e4, center: !0, responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 5 } }
//         }),
//             $("#media").owlCarousel({
//                 loop: !0, margin: 10, nav: !0, rewind: !0, dots: !1, navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
//                 autoplay: !0, autoPlay: 2e4, center: !0, responsive: { 0: { items: 1 }, 600: { items: 3 }, 1e3: { items: 5 } }
//             })
//     }));
