"use strict";

$(document).ready(function () {
  $('.loader').fadeOut();
  $('.left-column').css({
    transform: 'translate(0)'
  });
  $('.right-column').css({
    transform: 'translate(0)'
  });
  var skillBars = document.getElementsByClassName('myBar');

  for (var i = 0; i < skillBars.length; i++) {
    var finishWidth = skillBars[i].dataset.per;
    skillBars[i].style.width = finishWidth + '%';
  }

  $('.project').hover(function () {
    $(this).find('.tags').slideDown();
    $(this).find('.btns').fadeIn();
  }, function () {
    $(this).find('.tags').slideUp();
    $(this).find('.btns').fadeOut();
  }); // canvas

  var myImg = document.getElementById('myImg');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  myImg.style.display = 'none';
  var imageOfMe = new Image();
  imageOfMe.src = "images/Me.png";

  imageOfMe.onload = function () {
    canvas.height = imageOfMe.height;
    canvas.width = imageOfMe.width;
    ctx.drawImage(imageOfMe, 0, 0);
  };
});