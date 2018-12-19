function vlogologyScripts() {
  const $sectionToggle = $(".sidebar__section--toggle");
  const $sectionHidden = $(".sidebar__section--hidden");
  const $sectionToggledClass = "sidebar__section--toggled";
  const $menuButton = $(".button--menu");
  const $menuButtonOpen = "button--menu-open";
  const $buttonYellow = "button--yellow";
  const $buttonRed = "button--red";
  const $sidebar = $(".sidebar");
  const $contentWrapper = $(".content-wrapper");
  const $contentWrapperSidebarVisibleClass = "content--sidebar";
  const $sidebarVisibleClass = "sidebar--visible";

  const toggleSidebarVisible = () => {
    $sidebar.toggleClass($sidebarVisibleClass);
    $contentWrapper.toggleClass($contentWrapperSidebarVisibleClass);
  }

  $sectionToggle.on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    $sectionToggle.removeClass($sectionToggledClass);
    $sectionHidden.slideUp();
    $(this)
      .siblings(".sidebar__section--hidden")
      .slideToggle();
    $(this).addClass($sectionToggledClass);
  });
  $menuButton.on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleSidebarVisible();
  });

  $contentWrapper.on("click", function(e) {
    if ($contentWrapper.hasClass($contentWrapperSidebarVisibleClass)) {
      return toggleSidebarVisible();
    }
  });

  (function(l) {
    let i,
      s = { touchend: function() {} };
    for (i in s) l.addEventListener(i, s);
  })(document);
}
$(document).ready(function() {
  vlogologyScripts();
});
