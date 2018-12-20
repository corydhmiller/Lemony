(function () {
  /**
   If JavaScript is enabled, remove the class indicating that JS is not supported and add js-enabled.

   Without js-enabled, the animations will not run and will appear static for devices/users who do not have JS on.
   */
  $('body').removeClass('no-js').addClass('js-enabled');

  // DOM Variables
  const $sectionToggle = $(".sidebar__section--toggle");
  const $sectionHidden = $(".sidebar__section--hidden");
  const $sectionToggledClass = "sidebar__section--toggled";
  const $menuButton = $(".button--menu");
  const $sidebar = $(".sidebar");
  const $contentWrapper = $(".content-wrapper");
  const $contentWrapperSidebarVisibleClass = "content--sidebar";
  const $sidebarVisibleClass = "sidebar--visible";

  // Helper Utility functions
  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const resetElementHeight = element => {
    element.css('height', '');
  };

  const setHeightToContents = el => {
    return el.height(el[0].scrollHeight);
  };

  // Sidebar Functions
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

  // If the sidebar is currently expanded and the user clicks on the content, close the sidebar.
  $contentWrapper.on("click", function (e) {
    if ($contentWrapper.hasClass($contentWrapperSidebarVisibleClass)) {
      return toggleSidebarVisible();
    }
  });

  //!-- Animations

  const animationHandlers = {
    flyin: function (element) {
      // This function is left/right agnostic. The direction and animation is handled by the CSS.
      const el = $(element);
      el.addClass('animate__flyin--complete');
    },
    fadein: function (element) {
      const el = $(element);
      // Run an opacity fade based on either data-fadetime or standard 500
      el.animate({
        opacity: 1
      }, el.data("fadetime") || 500);
    },
    typeout: function (element) {
      const el = $(element);
      // We're only going to be working through this function if there is a string returned with this text.
      if (typeof el.text() !== 'string') return;
      // Create an array of all the characters found in the string.
      const textArray = el.text().split('');
      let typedText = '';
      // Set the text to nothing, then reveal the empty element.
      el.text('').show();
      // Starting at the 0 index, recursively loop through the array that was created from the string
      (function typeLoop(i = 0) {
        setTimeout(function () {
          typedText = typedText + textArray[i];
          el.html(typedText + '\<span class="blink"\>|\</span\>');
          if (i < textArray.length - 1) {
            // If the current index is less than the length, call the loop again
            return typeLoop(i + 1);
          }
        }, getRandomNumber(10, 200));
        // The get random number above simulates a typing speed range.
      })();
    }
  };

  const runVisibleAnimations = () => {
    // We're going to run this function against the .animate class.
    $('.animate').each(function () {
      // Check to see if any of the .animate elements on the page are visible in the viewport
      if ($(this).isInViewport()) {
        const parentAnimateWrapper = $(this);
        // If there is a visible element, check down through all of the children for any element with animate__object. This class will give us the information required to run the action handlers.
        // If any elements are found, create an array with these elements.
        let animationObjects = $(this).find($('.animate__object'));

        // If we have found any elements with the class animate__object, proceed forward into the loop.
        if (animationObjects) {
          // Loop over every found animate__object.
          for (let key = 0; key < animationObjects.length; key++) {
            const element = animationObjects[key];
            // We only want to run the animations once, so once the element has been found, we are going to remove the .animate__object class to prevent it from running any more.
            $(element).removeClass('animate__object');
            const animation = $(element).data('animation');
            // Finally, check to see if data-animation has been set on this animate__object element. If there is no animation specified, we should not advance.
            // We also want to check if the animation key is located within the animation handler object.
            // Both must be true to attempt running the function.
            if (animation && animationHandlers[animation]) {
              // If the object has data-delay set, run the animation after the delay.
              // If no delay is set, run immediately.
              setTimeout(() => {
                animationHandlers[animation](element);
              }, $(element).data('delay') || 0);
            }
          }
          // Reset height style on parent animation wrapper
          resetElementHeight(parentAnimateWrapper);
        }
      }
    });
  };
  /**
  Here's an example of the HTML required for a fade-in animation:

    <div class="animate">
      <div class="animate__object animate__fadein" data-animation="fadein">
        <h2 class="serif">This header will fade in with this image</h2>
        <img src="/images/my-great-image.jpg">
      </div>
    </div>

   */

  // As we scroll or resize the window, we need to check to see if there are any visible animations to run.
  $(window).on('resize scroll', function () {
    runVisibleAnimations();
  });

  // Define function to determine if the given element is in the viewport.
  $.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  (function (l) {
    let i,
      s = {
        touchend: function () {}
      };
    for (i in s) l.addEventListener(i, s);
  })(document);

  // On load, we want to get the animation objects and set their height based on the content inside of the element. This will be removed once the animation runs.
  $('.animate').each(function () {
    const el = $(this);
    setHeightToContents(el);
  });
  // If the user refreshes or loads in and an animation is visible, we want to immediately run the animation.
  runVisibleAnimations();
})();