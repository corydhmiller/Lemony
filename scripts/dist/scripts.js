"use strict";

var vlogologyScripts = function () {
  var sectionToggle = document.querySelectorAll(".sidebar__section--toggle");
  var sectionHidden = document.querySelectorAll(".sidebar__section--hidden");
  var sectionHiddenClass = "sidebar__section--hidden";
  var sectionToggledClass = "sidebar__section--toggled";
  var $menuButton = document.querySelectorAll(".button--menu");
  var $menuButtonOpen = "button--menu-open";
  var $buttonYellow = "button--yellow";
  var $buttonRed = "button--red";
  var $sidebar = document.querySelector(".sidebar");
  var $contentWrapper = document.querySelector(".content-wrapper");
  var $contentWrapperSidebarVisibleClass = "content--sidebar";
  var $sidebarVisibleClass = "sidebar--visible";

  // Helper Functions
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  // Action Handlers

  var actionHandlers = {
    toggleMenu: function toggleMenu() {
      return toggleSidebarVisible();
    },
    sidebarSectionToggle: function sidebarSectionToggle(event) {
      return _toggleSectionVisible(event);
    }

    // Event Listeners

  };document.addEventListener('click', function (event) {
    if (!event.target.dataset.action) return;
    var action = event.target.dataset.action;
    return actionHandlers[action] ? actionHandlers[action](event) : console.error("Not a valid action.");
  });

  // Controlling Events
  var toggleSidebarVisible = function toggleSidebarVisible() {
    $sidebar.classList.toggle($sidebarVisibleClass);
    $contentWrapper.classList.toggle($contentWrapperSidebarVisibleClass);
  };

  var _toggleSectionVisible = function _toggleSectionVisible(event) {
    var clickedElement = event.target;
    event.stopPropagation();
    event.preventDefault();
    for (var section in sectionToggle) {
      var sectionElement = sectionToggle[section];
      if (hasClass(sectionElement, sectionToggledClass)) {
        sectionElement.classList.remove(sectionToggledClass);
        sectionElement.nextElementSibling.classList.add(sectionHiddenClass);
      }
    }
    console.log(clickedElement);
    clickedElement.classList.add(sectionToggledClass);
    clickedElement.nextElementSibling.classList.remove(sectionHiddenClass);
  };

  $contentWrapper.addEventListener("click", function (e) {
    if (hasClass($contentWrapper, $contentWrapperSidebarVisibleClass)) {
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
}();