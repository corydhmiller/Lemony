
const vlogologyScripts = (() => {
  const sectionToggle = document.querySelectorAll(".sidebar__section--toggle");
  const sectionHidden = document.querySelectorAll(".sidebar__section--hidden");
  const sectionHiddenClass = "sidebar__section--hidden";
  const sectionToggledClass = "sidebar__section--toggled";
  const $menuButton = document.querySelectorAll(".button--menu");
  const $sidebar = document.querySelector(".sidebar");
  const $contentWrapper = document.querySelector(".content-wrapper");
  const $contentWrapperSidebarVisibleClass = "content--sidebar";
  const $sidebarVisibleClass = "sidebar--visible";

  // Helper Functions
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  // Action Handlers

  const actionHandlers = {
    toggleMenu: () => {
      return toggleSidebarVisible();
    },
    sidebarSectionToggle: event => {
      return _toggleSectionVisible(event);
    }
  };

  // Event Listeners

  document.addEventListener('click', function (event) {
    if (!event.target.dataset.action) return;
    const action = event.target.dataset.action;
    return actionHandlers[action] ? actionHandlers[action](event) : console.error("Not a valid action.");
  });


  // Controlling Events
  const toggleSidebarVisible = () => {
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

  const _toggleSectionVisible = event => {
    const clickedElement = event.target;
    const elementContent = clickedElement.nextElementSibling;
    event.stopPropagation();
    event.preventDefault();
    for (let section in sectionToggle) {
      let sectionElement = sectionToggle[section];
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
    let i,
      s = {
        touchend: function () {}
      };
    for (i in s) l.addEventListener(i, s);
  })(document);

  (function () {

  })();
})();