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


})
