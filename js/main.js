var $body = $('body');

$('html').on('keydown', function () {
  var $newBall = $('<div>');
  var randLeft = Math.random() * 500;
  var randTop = Math.random() * 500;
  var randColorList = ['royalblue', 'mistyrose', 'linen', 'lightcoral', 'palegreen'];

  $newBall.css('left', randLeft);
  $newBall.css('top', randTop);
  $newBall.css('backgroundColor', randColorList[Math.floor(Math.random() * randColorList.length)]);
  $newBall.addClass('ball');
  $('body').append($newBall);
});
