
document.addEventListener('DOMContentLoaded',function(){
  $('.Search i').on('click',function(){
    $('.Search').toggleClass('active')
  })
})
 function scrollAppear() {
   var box = document.querySelectorAll('.box');
   var box2 = document.querySelectorAll('.box-2');
   var screenPosition1 = window.innerHeight /1.3 ;
   var screenPosition2 = window.innerHeight /1.2 ;
   console.log('hello');
   for(var i=0; i < box.length; i++) {
     var boxPosition = box[i].getBoundingClientRect().top;
     if(boxPosition < screenPosition1) {
       box[i].classList.add('box-appear');
     }
   }
   for(var i = 0; i < box2.length; i++) {
     var boxPosition = box2[i].getBoundingClientRect().top;
     if(boxPosition < screenPosition2) {
       box2[i].classList.add('box-appear');
     }
   }
 }

 window.addEventListener('scroll',scrollAppear);
