var $body = $('body');

$('html').on('keydown', function () {
  var $newBall = $('<div>');
  var randLeft = Math.random() * 500;
  var randTop = Math.random() * 500;

  $newBall.css('left', randLeft);
  $newBall.css('top', randTop);
  $newBall.addClass('ball');
  $('body').append($newBall);
})
