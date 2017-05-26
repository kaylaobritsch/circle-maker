var $body = $('body');

$('html').on('keydown', function () {
  var $newBall = $('<div>');
  var randLeft = Math.random() * document.documentElement.clientWidth;
  var randTop = Math.random() * document.documentElement.clientHeight;
  var randColorList = ['royalblue', 'mistyrose', 'linen', 'lightcoral', 'palegreen'];

  $newBall.css('left', randLeft);
  $newBall.css('top', randTop);
  $newBall.css('backgroundColor', randColorList[Math.floor(Math.random() * randColorList.length)]);
  $newBall.addClass('ball');
  $('body').append($newBall);
});
