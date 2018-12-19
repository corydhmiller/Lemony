const vlogologyScripts = (() => {
  const sectionToggle = document.querySelectorAll(".sidebar__section--toggle");
  const sectionHidden = document.querySelectorAll(".sidebar__section--hidden");
  const sectionHiddenClass = "sidebar__section--hidden";
  const sectionToggledClass = "sidebar__section--toggled";
  const $menuButton = document.querySelectorAll(".button--menu");
  const $menuButtonOpen = "button--menu-open";
  const $buttonYellow = "button--yellow";
  const $buttonRed = "button--red";
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
  }

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
  }

  const _toggleSectionVisible = event => {
    const clickedElement = event.target;
    event.stopPropagation();
    event.preventDefault();
    for (let section in sectionToggle) {
      let sectionElement = sectionToggle[section];
      if (hasClass(sectionElement, sectionToggledClass)) {
        sectionElement.classList.remove(sectionToggledClass);
        sectionElement.nextElementSibling.classList.add(sectionHiddenClass);
      }
    }
    console.log(clickedElement);
    clickedElement.classList.add(sectionToggledClass);
    clickedElement.nextElementSibling.classList.remove(sectionHiddenClass)
 }

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
})();