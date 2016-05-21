// // check to make sure that the browser can handle window.addEventListener
// if (window.addEventListener) {
//     // create the keys and konami variables
//     var keys = [],
//         konami = "38,38,40,40,37,39,37,39,66,65";
//     // bind the keydown event to the Konami function
//     window.addEventListener("keydown", function(e){
//         // push the keycode to the 'keys' array
//         keys.push(e.keyCode);
//         console.log(keys);
//         //Je rajoute cette condition afin de pouvoir réinitialiser le tableau si les touches cliquées dépassent
//         // la longueur de konami
//         if(keys.length > konami.split(',').length){
//           keys = [];
//         }
//         // and check to see if the user has entered the Konami code
//         if (keys.toString() === konami) {
//             // do something such as:
//             alert('salut!')
//               // console.log("bonjour");
//             // and finally clean up the keys array
//             keys = [];
//         };
//     }, true);
// };
'use strict',
$(function(){
  // var sliders  = $('.slider__slide'),
  //     previous = $('.slider__control--previous'),
  //     next     = $('.slider__control--next');
  // var nextSlide, previousSlide,i;
  // i = 0;
  // TweenMax.set([sliders[1],sliders[2]],{xPercent: 100})
  // nextSlide = function(){
  //   if(i < sliders.length - 1){
  //
  //     i++;
  //     console.log(i);
  //     TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
  //     TweenMax.to(sliders[i-1],1,{xPercent: -100, ease:Power2.easeOut})
  //   } else if (i === sliders.length - 1){
  //     i = 0;
  //     TweenMax.to([sliders[i]],1,{xPercent: 0,ease:Power0.easeOut})
  //     TweenMax.to([sliders[i+1]],1,{xPercent: 100,ease:Power0.easeOut})
  //     TweenMax.to([sliders[i+2]],0.6,{xPercent: 100,ease:Power0.easeOut})
  //   }
  // };
  //
  // previousSlide = function(){
  //   if(i > 0){
  //     i--;
  //     console.log(i);
  //     TweenMax.to(sliders[i+1],1,{xPercent: 100, ease:Power2.easeOut})
  //     TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
  //   }
  // };
  //
  // next.click(nextSlide)
  // previous.click(previousSlide)
  $('#input-01').focusout(function(){
    $inputVal = $(this).val();
    if($inputVal === ""){
      $('#input-01').removeClass('has-value');
    } else {
      $('#input-01').addClass('has-value');
      console.log('bonjour');

    }
  })
  $('textarea').focusout(function(){
    $textAreaVal = $(this).val();
    if($textAreaVal === ""){
      $('textarea').removeClass('has-value');
    } else {
      $('textarea').addClass('has-value');
      console.log('bonjour');

    }
  })
  // var svgImage = new Image();
  //   svgImage.src= 'http://image005.flaticon.com/159/svg/136/136262.svg'
  // const canvas = document.getElementById('canvas'),
  //     ctx    = canvas.getContext('2d');
  // var x =  0;
  // const y = 55;
  // var speed = 2;
  //
  //
  // function animate() {
  //
  //     reqAnimFrame = window.mozRequestAnimationFrame ||
  //                 window.webkitRequestAnimationFrame ||
  //                 window.msRequestAnimationFrame     ||
  //                 window.oRequestAnimationFrame      ||
  //                 window.RequestAnimationFrame
  //
  //                 ;
  //
  //     reqAnimFrame(animate);
  //
  //     x += speed;
  //     if(x <= 0 || x >= canvas.width - 20){
  //         speed = -speed;
  //     }
  //     draw();
  // }
  //
  //
  // function draw() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.drawImage(svgImage,x,y,25,25)
  // }
  //     svgImage.onload = function(){
  //       draw();
  //
  //       animate();
  //
  //       };

})
