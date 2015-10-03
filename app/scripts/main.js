$(document).ready(function() {

  var pages = ['acasa', 'despreFestival', 'artisti', 'program', 'parteneri', 'contact'];

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

    var nextPageText = $('.next-page-text');

    if (pages.length === nextIndex) {
      // on last page, hide the 'next-page button'
      $('.next-page').addClass('go-away');
    }

    if (index === pages.length) {
      $('.next-page').removeClass('go-away');
    }

    if (nextIndex === 1) {
      nextPageText.text('Afla mai multe');
    }

    if (nextIndex === 2) {
      // about fest page, I want some custom stuff from fullpage.js
      // the navigation for slides is put by default in the .section div
      // I want it to be under gallery, so I will do some magic here

      moveSlidesNavigation();

      nextPageText.text('Artisti');
    }

    if (nextIndex === 3) {
      nextPageText.text('Program');
    }

    if (nextIndex === 4) {
      nextPageText.text('Parteneri');
    }

    if (nextIndex === 5) {
      nextPageText.text('Contact');
    }
  }

  function moveSlidesNavigation() {

    var slidesNav = $('.fp-slidesNav');
    var gallery = $('.gallery');

    gallery.append(slidesNav.remove());
  }
});
