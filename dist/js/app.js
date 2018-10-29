$(document).ready(function(){
  // BEGIN NAV DROPDOWN BUTTON
  $('#btn_nav_whisky').click(function(){
    $('#result_nav_whisky').slideToggle('slow');
  });
  // END NAV DROPDOWN BUTTON
  // BEGIN STICKY MENU
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });
  // END STICKY MENU
  // BEGIN MOBILE BUTTON
  $('#btn_mobile').click(function(){
    $(this).toggleClass('active');
    $('nav').slideToggle('slow');
    $('body').toggleClass('hidden');
  });
  // END MOBILE BUTTON
  // BEGIN LIKE BUTTON
  $('.like').click(function(){
    $(this).toggleClass('active');
  });
  // END LIKE BUTTON
  // BEGIN STAR BUTTON
  $('.btn_star').click(function(){
      $(this).toggleClass('active');
  });
  // END STAR BUTTON
  // BEGIN MORE REVIEWS
  $('#btn_more_reviews').click(function(){
    $(this).text('Change text');
    $('.more_reviews').slideToggle('slow');
  });
  // BEGIN MORE REVIEWS
  // BEGIN SELECT
  $('.select').click(function(){
      $(this).toggleClass('active');
      $(this).next('.select_result').slideToggle('slow');
  });
  // END SELECT
  // BEGIN POPUP LOGIN
    $('#btn_login').click(function () {
       $('#popup_login').addClass('active');
       $('body').addClass('hidden');
    });
    $('.btn_close').click(function () {
       $(this).parent('.popup').removeClass('active');
        $('body').removeClass('hidden');
    });
  // END POPUP LOGIN
});
