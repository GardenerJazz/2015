$(document).ready(function() {
  live();
  fullPage();
  artists();
});

// funciton for full page init
function fullPage() {
  var pages = ['acasa', 'live', 'despreFestival', 'artisti', 'program', 'parteneri', 'contact'];

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
      nextPageText.text('Vezi festivalul in direct!');
    }

    if (nextIndex === 2) {
      nextPageText.text('Afla mai multe');
    }

    if (nextIndex === 3) {
      // about fest page, I want some custom stuff from fullpage.js
      // the navigation for slides is put by default in the .section div
      // I want it to be under gallery, so I will do some magic here

      moveSlidesNavigation();

      nextPageText.text('Artisti');
    }

    if (nextIndex === 4) {
      nextPageText.text('Program');
    }

    if (nextIndex === 5) {
      nextPageText.text('Parteneri');
    }

    if (nextIndex === 6) {
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

function live () {
  // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1, player2;
      window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('day-1', {
          height: '390',
          width: '640',
          // videoId: 'M7lc1UVf-VE',
          videoId: 'pVGzJu2pPpQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

        player2 = new YT.Player('day-2', {
          height: '390',
          width: '640',
          // videoId: 'M7lc1UVf-VE',
          videoId: 'Jfcf2QfLiiE',
          events: {
            'onReady': onPlayerReady2,
            'onStateChange': onPlayerStateChange2
          }
        });
      }

      var date = moment().format('DD-MM-YY');

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        if(date === '22-10-15') {
          location.hash = 'live';
          event.target.playVideo();
        }
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady2(event) {
        if(date === '23-10-15') {
          location.hash = 'live/1';
          event.target.playVideo();
        }
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      var done2 = false;
      function onPlayerStateChange(event) {

        if(event.data == YT.PlayerState.PLAYING) {
          ga('send', 'event', 'Videos', 'play', 'Day 1');
        }

        if(event.data == YT.PlayerState.PAUSED) {
          ga('send', 'event', 'Videos', 'pause', 'Day 1');
        }

        if(event.data == YT.PlayerState.BUFFERING) {
          ga('send', 'event', 'Videos', 'buffer', 'Day 1');
        }


        if(event.data == YT.PlayerState.ENDED) {
          ga('send', 'event', 'Videos', 'end', 'Day 1');
        }

        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

      function onPlayerStateChange2(event) {
        if(event.data == YT.PlayerState.PLAYING) {
          ga('send', 'event', 'Videos', 'play', 'Day 2');
        }

        if(event.data == YT.PlayerState.PAUSED) {
          ga('send', 'event', 'Videos', 'pause', 'Day 2');
        }

        if(event.data == YT.PlayerState.BUFFERING) {
          ga('send', 'event', 'Videos', 'buffer', 'Day 2');
        }


        if(event.data == YT.PlayerState.ENDED) {
          ga('send', 'event', 'Videos', 'end', 'Day 2');
        }

        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo2, 6000);
          done2 = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
      function stopVideo2() {
        player2.stopVideo();
      }
}
