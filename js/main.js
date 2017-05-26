var $ball = $('.ball');

$('#btn-spawn').on('keydown', function () {
  var $newBall = $('<div>');
  var randLeft = Math.random();
  var randTop = Math.random();

  $newBall.addClass('ball');
  $('body').append($newBall);
  $('.ball').css('left', randLeft);
  $('.ball').css('top', randTop);
})
