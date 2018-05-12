(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({fullWidth: true});
    });
    $(".dropdown-button").dropdown();
  }); // end of document ready

})(jQuery); // end of jQuery name space