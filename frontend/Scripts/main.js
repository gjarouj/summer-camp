(function($) {
  
    "use strict";  
    

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     var endTime = new Date("July 6, 2026 8:00:00");
      jQuery('#clock').countdown(endTime, function (event) {
      var $this=jQuery(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%-D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
    //  var wow = new WOW({
    //   //disabled for mobile
    //     mobile: false
    // });
    // wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation 
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    }); 

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

    });     


    var telInput = document.querySelector("#txtPhone");
    var telInput2 = document.querySelector("#txtMobileNo");
    var telInput3 = document.querySelector("#txtAskPhone");
    var instance = window.intlTelInput(telInput, { preferredCountries: ["ae", "lb"], separateDialCode: !0, utilsScript: "utils.js?1613236686837" });
    var instance2 = window.intlTelInput(telInput2, { preferredCountries: ["ae", "lb"], separateDialCode: !0, utilsScript: "utils.js?1613236686837" });
    var instance3 = window.intlTelInput(telInput3, { preferredCountries: ["ae", "lb"], separateDialCode: !0, utilsScript: "utils.js?1613236686837" });
    telInput.addEventListener("blur", function () {
      var errorMsg = document.querySelector("#errormsg22");      
      if (telInput.value.trim()) {
          if (instance.isValidNumber()) {
              errorMsg.classList.add("hide");
              $("#txtFullNumber").val(instance.getNumber());
          } else {
              errorMsg.classList.remove("hide");
          }
      }     

    });  


    telInput2.addEventListener("blur", function () {   
        var errorMsg2 = document.querySelector("#errormsg33");
        if (telInput2.value.trim()) {
            if (instance2.isValidNumber()) {
                errorMsg2.classList.add("hide");
                $("#txtFullMobileNo").val(instance2.getNumber());
            } else {
                errorMsg2.classList.remove("hide");
            }
        }

    }); 

    telInput3.addEventListener("blur", function () {
        var errorMsg3 = document.querySelector("#errormsg44");
        if (telInput3.value.trim()) {
            if (instance3.isValidNumber()) {
                errorMsg3.classList.add("hide");
                $("#txtAskFullPhone").val(instance3.getNumber());
            } else {
                errorMsg3.classList.remove("hide");
            }
        }

    }); 


        
 
       

}(jQuery));