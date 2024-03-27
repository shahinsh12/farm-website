   
   $(function () {
   /* fixed header menu js starts */

    $(window).on('scroll', function(){
        if ($(window).scrollTop() > $('#bottom-nav').height()){
            $('#bottom-nav').addClass('fixed-menu')
        }else {
            $('#bottom-nav').removeClass('fixed-menu')
        }
    })
 
    /* fixed header menu js ends */


       /* scroll top button js starts */



    
    $('.top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        },1000)
    })

    /* scroll top button js ends */






 








})
 /* mobile menu js starts here */
  
 $('.toggle-btn-mobile').on('click', function () {
    $('.mobile-menu').toggleClass('active');
  }); 
  /* mobile menu js ends here */