$(document).ready(function() {

  var pages = ['acasa', 'despreFestival', 'artisti', 'program', 'parteneri'];

  $('#fullpage').fullpage({
    anchors: pages,
    menu: '#menu',
    onLeave: onLeaveHandler
  });

  $('.next-page').on('click', function(event) {
    $.fn.fullpage.moveSectionDown();
  });

  function onLeaveHandler(index, nextIndex, direction) {
    if (pages.length === nextIndex) {
      // last page hide the 'next-page button'
      $('.next-page').addClass('go-away');
    }

    if (index === pages.length) {
      $('.next-page').removeClass('go-away');
    }
  }
});
