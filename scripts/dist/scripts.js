"use strict";

function vlogologyScripts() {
  var $sectionToggle = $(".sidebar__section--toggle");
  var $sectionHidden = $(".sidebar__section--hidden");
  var $sectionToggledClass = "sidebar__section--toggled";
  var $menuButton = $(".button--menu");
  var $sidebar = $(".sidebar");
  var $contentWrapper = $(".content-wrapper");
  var $contentWrapperSidebarVisibleClass = "content--sidebar";
  var $sidebarVisibleClass = "sidebar--visible";

  var toggleSidebarVisible = function toggleSidebarVisible() {
    $sidebar.toggleClass($sidebarVisibleClass);
    $contentWrapper.toggleClass($contentWrapperSidebarVisibleClass);
  };

  $sectionToggle.on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $sectionToggle.removeClass($sectionToggledClass);
    $sectionHidden.slideUp();
    $(this).siblings(".sidebar__section--hidden").slideToggle();
    $(this).addClass($sectionToggledClass);
  });
  $menuButton.on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleSidebarVisible();
  });

  $contentWrapper.on("click", function (e) {
    if ($contentWrapper.hasClass($contentWrapperSidebarVisibleClass)) {
      return toggleSidebarVisible();
    }
  });

  (function (l) {
    var i = void 0,
        s = {
      touchend: function touchend() {}
    };
    for (i in s) {
      l.addEventListener(i, s);
    }
  })(document);
}
$(document).ready(function () {
  vlogologyScripts();
});