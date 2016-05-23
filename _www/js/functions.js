'use strict',
$(function(){
  // check to make sure that the browser can handle window.addEventListener
  var tl        = new TimelineMax(),
      posX      = $(window).height() / 2,
      posY      = $(window).width() / 2,
      $oval     = $('#Oval-1'),
      $logo     = $('.logo'),
      lol = new TimelineMax();

  if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
    konami = "38,38,40,40,37,39,37,39,66,65";
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function(e){
      // push the keycode to the 'keys' array
      keys.push(e.keyCode);
      console.log(keys);
      //Je rajoute cette condition afin de pouvoir réinitialiser le tableau si les touches cliquées dépassent
      // la longueur de konami
      if(keys.length > konami.split(',').length){
        keys = [];
      }
      // and check to see if the user has entered the Konami code
      if (keys.toString() === konami) {
        // do something such as:

        tl.to($('section,footer'),0.3,{opacity:0})
        tl.to($('.main_nav'),0.3, {opacity: 0}, '-=0.3')

        tl.to($logo, 1 , {x: 320 , y: 200})
        tl.to($logo, 1 , {scale: 1.5,ease: Bounce.easeIn})

        tl.to($oval,0.5,{fill: "#49a2df"})
        tl.to($oval,0.5,{fill: "#e74c3c"})
        tl.to($oval,0.5,{fill: "#e67e22"})
        tl.to($oval,0.5,{fill: "#f39c12"})
        tl.to($oval,0.5,{fill: "#f1c40f"})
        tl.to($oval,0.5,{fill: "#d35400"})
        tl.to($oval,0.5,{fill: "#c0392b"})
        tl.to($oval,0.5,{fill: "#34495e"})
        tl.to($oval,0.5,{fill: "#000000"})
        tl.to($('.to-animate'),0.3,{opacity: 1})
        lol.set({},{onComplete: function(){tl.reverse(3)}},11)
        lol.duration();


        keys = [];
      };
    }, true);
  };
  var sliders  = $('.slider__slide'),
      previous = $('.slider__control--previous'),
      next     = $('.slider__control--next');
  var nextSlide, previousSlide,i, currentSlide;
  i = 0;
  currentSlide = i;
  // Set all the slides in their default position which is outsite of the view except the first one.
  TweenMax.set([sliders[1],sliders[2]],{xPercent: 100})
  slideInnerAnimation = function(){
    switch (currentSlide) {
      case 0:
      console.log('première slide IN')
      break;
      case 1:
      console.log('deuxième slide IN')
      break;
      case 2:
      console.log('troisième slide IN')
      break;
      default:
        console.log("oops");
    }
    console.log("lol");
  }
  nextSlide = function(){
    if(i < sliders.length - 1){

      i++;
      currentSlide = i;
      TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
      TweenMax.to(sliders[i-1],1,{xPercent: -100, ease:Power2.easeOut})
    } else if (i === sliders.length - 1){
      i = 0;
      TweenMax.to([sliders[i]],1,{xPercent: 0,ease:Power0.easeOut})
      TweenMax.to([sliders[i+1]],1,{xPercent: 100,ease:Power0.easeOut})
      TweenMax.to([sliders[i+2]],0.6,{xPercent: 100,ease:Power0.easeOut})
    }
    console.log(currentSlide);
  };

  previousSlide = function(){
    // console.log(currentSlide);

    if(i > 0){
      i--;
      console.log(i);
      TweenMax.to(sliders[i+1],1,{xPercent: 100, ease:Power2.easeOut})
      TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
    }
    currentSlide = i;
  };
  // Bringin' the magic in !
  next.click(nextSlide)
  previous.click(previousSlide)
  // setInterval(slideInnerAnimation,300)
  // Ce bout de code permet au label de rester à sa position quand l'input est focus si ce dernier a une valeur entrée
  $('#input-01').focusout(function(){
    $inputVal = $(this).val();
    if($inputVal === ""){
      $('#input-01').removeClass('has-value');
    } else {
      $('#input-01').addClass('has-value');
      console.log('bonjour');

    }
  })
  // Ce bout de code permet au textarea de rester avec un fond blanc si et seulement si une valeur y est existante
  $('textarea').focusout(function(){
    $textAreaVal = $(this).val();
    if($textAreaVal === ""){
      $('textarea').removeClass('has-value');
    } else {
      $('textarea').addClass('has-value');
      console.log('bonjour');

    }
  })

  $('.main_nav--media--menu__toggle').click(function(){
    $(this).toggleClass('is_open');
    $('.main_nav--media').toggleClass('is_open');
  })
  var svgImage = new Image();
    svgImage.src= 'http://image005.flaticon.com/159/svg/136/136262.svg'
  const canvas = document.getElementById('canvas'),
      ctx    = canvas.getContext('2d');
  var x =  0;
  const y = 55;
  var speed = 2;


  function animate() {

      reqAnimFrame = window.mozRequestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.msRequestAnimationFrame     ||
                  window.oRequestAnimationFrame      ||
                  window.RequestAnimationFrame

                  ;

      reqAnimFrame(animate);

      x += speed;
      if(x <= 0 || x >= canvas.width - 20){
          speed = -speed;
      }
      draw();
  }


  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(svgImage,x,y,25,25)
  }
      svgImage.onload = function(){
        draw();

        animate();

        };

})
