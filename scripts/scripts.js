function vlogologyScripts() {
  // Variables
  var $sectionToggle = $('.section__toggle');
  var $sectionHidden = $('.section__hidden');
  var $sectionToggledClass = 'section__toggled';
  var $menuButton = $('.button--menu');
  var $menuButtonOpen = 'button--menu-open';
  var $buttonYellow = 'button--yellow';
  var $buttonRed = 'button--red';
  var $sidebar = $('.sidebar');
  var $contentWrapper = $('.content-wrapper');
  var $contentWrapperSidebarVisibleClass = 'content--sidebar';
  var $sidebarVisibleClass = 'sidebar--visible';

  $sectionToggle.click(function(){
    $sectionToggle.removeClass($sectionToggledClass);
    $sectionHidden.slideUp();
    // Slider toggle is not working for whatever reason, figure that out.
    $(this).siblings('.section__hidden').slideToggle();
    $(this).addClass($sectionToggledClass);
  })
  $menuButton.click(function() {
    $sidebar.toggleClass($sidebarVisibleClass);
    $contentWrapper.toggleClass($contentWrapperSidebarVisibleClass);
  })
}
$(document).ready(function() {
 vlogologyScripts();
});