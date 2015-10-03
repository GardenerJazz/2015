$(document).ready(function() {

  var pages = ['acasa', 'despreFestival', 'artisti', 'program', 'parteneri'];

  $('#fullpage').fullpage({
    anchors: pages,
    menu: '#menu',
    slidesNavigation: true,
    controlArrows: false,
    onLeave: onLeaveHandler
  });

  $('.next-page').on('click', function(event) {
    $.fn.fullpage.moveSectionDown();
  });

  function onLeaveHandler(index, nextIndex, direction) {

    if (pages.length === nextIndex) {
      // on last page, hide the 'next-page button'
      $('.next-page').addClass('go-away');
    }

    if (index === pages.length) {
      $('.next-page').removeClass('go-away');
    }

    if (index === 1) {
      // about fest page, I want some custom stuff from fullpage.js
      // the navigation for slides is put by default in the .section div
      // I want it to be under gallery, so I will do some magic here

      moveSlidesNavigation();
    }
  }

  function moveSlidesNavigation() {

    var slidesNav = $('.fp-slidesNav');
    var gallery = $('.gallery');

    gallery.append(slidesNav.remove());
  }
});
