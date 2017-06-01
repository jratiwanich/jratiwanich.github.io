(function($) {
    "use strict"; // Start of use strict

    $('button.btn').on('focus',function(e){

      console.log("button focus="+ e.namespace);
    });


      $('.navbar a.dropdown-toggle').on('click', function(e) {
          var $el = $(this);
          var $parent = $(this).offsetParent(".dropdown-menu");
          $(this).parent("li").toggleClass('open');

          if(!$parent.parent().hasClass('nav')) {
              $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
          }

          $('.nav li.open').not($(this).parents("li")).removeClass("open");

          return false;
      });




    // jQuery for page scrolling animation -
      $('a.page-scroll').bind('click', function(e) {

        //make sure section name defined in the href
        var hash = this.hash;
        console.log("1 hash=" + this.hash);
        if(this.hash==="")
          hash = "#page-top";

        e.preventDefault();
        $('html,body').stop().animate({
          scrollTop: $(hash).offset().top
        },1250, function(){
          window.location.hash = hash;
        })

      });


    //requires jQuery Easing plugin to stop and easing
    $('a.page-scroll2').bind('click', function(e) {
      var hash = this.hash;
      console.log("2 hash=" + this.hash);

      if(this.hash==="")
        hash = "#page-top";

      e.preventDefault();
      $('html, body').stop().animate({
          scrollTop: ($(hash).offset().top - 50)
      }, 2250, 'easeInOutExpo');

     });


    // Highlight the top nav as scrolling occurs using bootstrap scrollspy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        //$('.navbar-toggle:visible').click();
        if(!$(this).hasClass("dropdown-toggle"))
          $('.navbar-collapse').removeClass("in");

    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 400
        }
    })

})(jQuery); // End of use strict
