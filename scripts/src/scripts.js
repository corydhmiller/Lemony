(function () {
  const $sectionToggle = $(".sidebar__section--toggle");
  const $sectionHidden = $(".sidebar__section--hidden");
  const $sectionToggledClass = "sidebar__section--toggled";
  const $menuButton = $(".button--menu");
  const $sidebar = $(".sidebar");
  const $contentWrapper = $(".content-wrapper");
  const $contentWrapperSidebarVisibleClass = "content--sidebar";
  const $sidebarVisibleClass = "sidebar--visible";

  const toggleSidebarVisible = () => {
    $sidebar.toggleClass($sidebarVisibleClass);
    $contentWrapper.toggleClass($contentWrapperSidebarVisibleClass);
  };

  $sectionToggle.on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $sectionToggle.removeClass($sectionToggledClass);
    $sectionHidden.slideUp();
    $(this)
      .siblings(".sidebar__section--hidden")
      .slideToggle();
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

   const setHeightToContents = el => {
     return el.height(el[0].scrollHeight);
   };

   $('.animate').each(function() {
    const el = $(this);
     setHeightToContents(el);
   });

  //  $('.animate__flyin').each(function() {
  //    const el = $(this);
  //    const delayTime = el.data("delay");
  //    setTimeout(function () {
  //      el.addClass('animate__flyin--complete');
  //    }, delayTime ? delayTime : "0");
  //  });

   $(window).scroll(function () {
     if (checkVisible($('.animate'))) {
       $('.animate__flyin').each(function () {
         const el = $(this);
         const delayTime = el.data("delay");
         setTimeout(function () {
           el.addClass('animate__flyin--complete');
         }, delayTime ? delayTime : "0");
       });
     }
   });

   function checkVisible(elm, evalCheck = "visible") {
     let vpH = $(window).height(), // Viewport Height
       st = $(window).scrollTop(), // Scroll Top
       y = $(elm).offset().top,
       elementHeight = $(elm).height();

     if (evalCheck == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
     if (evalCheck == "above") return ((y < (vpH + st)));
   }

  (function (l) {
    let i,
      s = {
        touchend: function () {}
      };
    for (i in s) l.addEventListener(i, s);
  })(document);
})();