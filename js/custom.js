  $(document).ready(function() {

      /* Menu */
      $(".hamburger").click(function() {
          $(".wrapper-player").toggle();
          $(".wrapper-playlist").fadeToggle();
      });
      $(".back-menu-btn").click(function() {
          $(".wrapper-playlist").toggle();
          $(".wrapper-player").fadeToggle();
      });
      $(".title-box-music a").click(function() {
          $(".title-box-music a").parent().parent().removeClass("active");
          $(this).parent().parent().addClass("active");
          $(".middle-banner p").remove();
          $(".middle-banner h3").remove();
          $(".active").find(".desc").clone().prependTo(".middle-banner");
          $(".active").find(".title").clone().prependTo(".middle-banner");
          /* Usuwanie długosci utworów */
          var str = $('.middle-banner .title').text();
          $('.middle-banner .title').html(str.substring(6, 30));
          $(".wrapper-playlist").toggle();
          $(".wrapper-player").fadeToggle();
      });


      $(".play").click(function() {
          $(this).css("display", "none");
          $(".pause").css("display", "block");
      });
      $(".pause").click(function() {
          $(this).css("display", "none");
          $(".play").css("display", "block");
      });

      $(".next").click(function() {
          $(".middle-banner p").remove();
          $(".middle-banner h3").remove();
          $(".active").next(".music").find(".desc").clone().prependTo(".middle-banner");
          $(".active").next(".music").find(".title").clone().prependTo(".middle-banner");
          $(".active").removeClass("active").next(".music").addClass("active");
          var str = $('.middle-banner .title').text();
          $('.middle-banner .title').html(str.substring(6, 30));


      });
      $(".prev").click(function() {
          $(".middle-banner p").remove();
          $(".middle-banner h3").remove();
          $(".active").prev(".music").find(".desc").clone().prependTo(".middle-banner");
          $(".active").prev(".music").find(".title").clone().prependTo(".middle-banner");
          $(".active").removeClass("active").prev(".music").addClass("active");
          var str = $('.middle-banner .title').text();
          $('.middle-banner .title').html(str.substring(6, 30));
      });
      var el = document.querySelector('#scrollable');

      Ps.initialize(el, {
          wheelSpeed: 1,
          wheelPropagation: true,
          minScrollbarLength: 80,
          maxScrollbarLength: 80
      });
      $("#volume").slider({
          value: 70,
          min: 0,
          max: 100,
          step: 1,
          range: "min",

      });
  });
