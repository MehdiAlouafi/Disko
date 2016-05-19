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

$(function(){
  var sliders  = $('.slider__slide'),
      previous = $('.slider__control--previous'),
      next     = $('.slider__control--next');
  var nextSlide, previousSlide,i;
  i = 0;
  TweenMax.set([sliders[1],sliders[2]],{xPercent: 100})
  nextSlide = function(){
    if(i < sliders.length - 1){

      i++;
      console.log(i);
      TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
      TweenMax.to(sliders[i-1],1,{xPercent: -100, ease:Power2.easeOut})
    } else if (i === sliders.length - 1){
      i = 0;
      TweenMax.to([sliders[i]],1,{xPercent: 0,ease:Power0.easeOut})
      TweenMax.to([sliders[i+1]],1,{xPercent: 100,ease:Power0.easeOut})
      TweenMax.to([sliders[i+2]],0.6,{xPercent: 100,ease:Power0.easeOut})
    }
  };

  previousSlide = function(){
    if(i > 0){
      i--;
      console.log(i);
      TweenMax.to(sliders[i+1],1,{xPercent: 100, ease:Power2.easeOut})
      TweenMax.to(sliders[i],1,{xPercent: 0, ease:Power2.easeOut})
    }
  };
  
  next.click(nextSlide)
  previous.click(previousSlide)

})
