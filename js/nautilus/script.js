var interval = 500;

var slide;

$('section.back').click(function(){
  var slide = $('.nautilus div:last-child').remove();
  $('.nautilus').prepend(slide);
});