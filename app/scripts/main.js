$(document).ready(function() {
  fullPage();
  artists();
});

// funciton for full page init
function fullPage() {
  var pages = ['acasa', 'despreFestival', 'artisti', 'program', 'parteneri', 'contact'];

  $('#fullpage').fullpage({
    anchors: pages,
    menu: '#menu',
    slidesNavigation: true,
    controlArrows: false,
    onLeave: onLeaveHandler,
    afterLoad: afterLoadHandler
  });

  function afterLoadHandler (pageName) {
    // ga('set', 'page', '/#' + pageName);
    ga('send', 'pageview', '/#' + pageName);
  }

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

  document.querySelector('.next-page').addEventListener('click', function(event) {
    $.fn.fullpage.moveSectionDown();
  });

  document.querySelector('.drawer-btn').addEventListener('click', function(event) {
    var menuItems = $('.menu-items');
    menuItems.toggleClass('collapsed');
  });
}

// function that inits the artists module
function artists() {

  // open the popup based on what slot is selected
  $(window).on('hashchange', function() {
    var artist = getArtistFromHash();

    $('body').toggleClass('selected-slot-state', !!artist);
    $('.slot').removeClass('selected');
    if(artist) {
      console.log(artist);
      $('.slot')
        .filter('.slot-' + artist)
          .addClass('selected');
    }
  });

  $('.section.artisti').on('click', function(e) {
    if(getArtistFromHash()) {
      location.hash = 'artisti';
    }
  });

  function getHash() {
    return location.toString().split('#')[1];
  }

  function getArtistFromHash() {
    var hash = getHash();

    if(hash.indexOf('artisti/') !== 0) {
      return false;
    }

    return hash.replace(/^artisti\//, '');
  }
}
