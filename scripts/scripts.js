function vlogologyScripts() {
  $('.section__toggle').click(function(){
    $('.section__toggle').removeClass('section__toggled');
    $('.section__hidden').slideUp();
    // Slider toggle is not working for whatever reason, figure that out.
    $(this).siblings('.section__hidden').slideToggle();
    $(this).addClass('section__toggled');
  })
}
$(document).ready(function() {
 vlogologyScripts();
});