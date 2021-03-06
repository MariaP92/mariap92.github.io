function imgHover() {
    $(".thumb-img").hover(function () {
        $(this).children(".folio-caption").animate({
            bottom: "0px"
        })
    }, function () {
        $(this).children(".folio-caption").animate({
            bottom: "-55px"
        })
    })
}

function navScroll() {
    $(window).scroll(function () {
        var t = $(window).scrollTop(),
            n = $("#aboutMore").offset().top - 184;
        t > n ? ($(".btnAbout").css({
            position: "absolute"
        }), $(".navbar-inverse").addClass("bg-nav")) : ($(".btnAbout").css({
            position: "fixed"
        }), $(".navbar-inverse").removeClass("bg-nav")), t > 20 ? $(".btnAbout").css({
            position: "absolute"
        }) : $(".btnAbout").css({
            position: "fixed"
        })
    })
}

function winHeight() {
    var t = $(window).height();
    $(".header").height(t)
} ! function () {
    "use strict";

    function t(t) {
        var n = t.getBoundingClientRect();
        return n.top >= 0 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && n.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    function n() {
        for (var n = 0; n < i.length; n++) t(i[n]) && i[n].classList.add("in-view")
    }

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('a[href^="#"]').on("click", function (t) {
        t.preventDefault();
        var n = this.hash,
            i = $(n);
        $("html, body").stop().animate({
            scrollTop: i.offset().top
        }, 900, "swing", function () {
            window.location.hash = n
        })
    });
    var i = document.querySelectorAll(".timeline li");
    window.addEventListener("load", n), window.addEventListener("resize", n), window.addEventListener("scroll", n), $(".navbar-brand, .top-scroll a").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top
            }, 2e3), !1
        }
    });
    var e = $(".navbar").height();
    if ($("a.btnAbout").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top - e
            }, 2e3), !1
        }
    }), setTimeout(function () {
        $(".progress-bar").each(function () {
            var t = $(this),
                n = $(this).parent().parent().children(".precent-value"),
                i = t.attr("aria-valuenow"),
                e = 0,
                o = setInterval(function () {
                    e >= i ? clearInterval(o) : (e += 1, t.css("width", e + "%")), n.text(e + "%")
                }, 20)
        })
    }, 300), $(".navbar-nav").onePageNav({
        scrollOffset: e,
        scrollSpeed: 2e3,
        scrollThreshold: .25
    }), $().prettyPhoto && imgHover(), $().quicksand) {
        var o = $("ul.container_folio").clone();
        $("#filterOptions li.cur a").attr("class");
        $("#filterOptions li a").click(function (t) {
            $("#filterOptions li").removeClass("cur"), $("#filterOptions li a").removeClass("cur");
            var n = $(this).attr("class").split(" ").slice(0)[0];
            if ($(this).parent().addClass("cur"), "all" == n) var i = o.find("li");
            else var i = o.find("li[data-type~=" + n + "]");
            return $("ul.container_folio").quicksand(i, {
                duration: 800,
                adjustHeight: !1,
                easing: "swing"
            }, function () {
                imgHover()
            }), $(this).addClass("cur"), !1
        })
    }
    $(".navbar").sticky({
        topSpacing: 0
    }), $("[data-gal='tooltip']").tooltip(), imgHover(), navScroll(), winHeight()
}(), $(window).resize(function () {
    navScroll(), winHeight()
});