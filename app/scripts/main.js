$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['acasa', 'despreFestival', 'artisti', 'program', 'parteneri'],
    menu: '#menu'
  });

  $('.next-page').on('click', function(event) {
    $.fn.fullpage.moveSectionDown();
  });
});
