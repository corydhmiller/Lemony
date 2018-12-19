"use strict";

var vlogologyScripts = function () {
  var sectionToggle = document.querySelectorAll(".sidebar__section--toggle");
  var sectionHidden = document.querySelectorAll(".sidebar__section--hidden");
  var sectionHiddenClass = "sidebar__section--hidden";
  var sectionToggledClass = "sidebar__section--toggled";
  var $menuButton = document.querySelectorAll(".button--menu");
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
  };

  // Event Listeners

  document.addEventListener('click', function (event) {
    if (!event.target.dataset.action) return;
    var action = event.target.dataset.action;
    return actionHandlers[action] ? actionHandlers[action](event) : console.error("Not a valid action.");
  });

  // Controlling Events
  var toggleSidebarVisible = function toggleSidebarVisible() {
    $sidebar.classList.toggle($sidebarVisibleClass);
    $contentWrapper.classList.toggle($contentWrapperSidebarVisibleClass);
  };

  function toggleClass(element, className) {
    if (!element || !className) {
      return;
    }

    var classString = element.className,
        nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
      classString += ' ' + className;
    } else {
      classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
  }

  var _toggleSectionVisible = function _toggleSectionVisible(event) {
    var clickedElement = event.target;
    var elementContent = clickedElement.nextElementSibling;
    event.stopPropagation();
    event.preventDefault();
    for (var section in sectionToggle) {
      var sectionElement = sectionToggle[section];
      if (hasClass(sectionElement, sectionToggledClass)) {
        sectionElement.classList.remove(sectionToggledClass);
        elementContent.classList.add(sectionHiddenClass);
      }
    }
    clickedElement.classList.add(sectionToggledClass);
    elementContent.style.height = elementContent.offsetHeight + 'px';
    // clickedElement.nextElementSibling.classList.remove(sectionHiddenClass)
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

  (function () {})();
}();