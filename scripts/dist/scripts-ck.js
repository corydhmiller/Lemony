"use strict";

// On responsive Menu toggle, open up the menu
$("#menu-toggle").click(function () {
  $("header").toggleClass("open", 2e3);$("#subnav").toggleClass("subnav-open", 2e3);
});$("#restock-toggle").click(function () {
  $(".restock").toggleClass("restock-open", 2e3);
});$("#size-chart").click(function () {
  $(".size-chart").toggleClass("size-chart_open", 2e3);
});$("#mce-EMAIL").on("input", function () {
  var e = $(this).val(),
      t = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;e.indexOf("@") !== -1 && e.indexOf(".") !== -1 && (t.test(e) ? $("#mc_embed_signup").addClass("success") : $("#mc_embed_signup").removeClass("success"));
});$(document).ready(function () {
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);e = e.length ? e : $("[name=" + this.hash.slice(1) + "]");if (e.length) {
          $("html,body").animate({ scrollTop: e.offset().top }, 1e3);return !1;
        }
      }
    });
  });
});