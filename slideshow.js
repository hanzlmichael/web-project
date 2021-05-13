/*COMMENT SLIDESHOW */
var slideIndex = 0;
showSlide(slideIndex);

function moveToNextSlide() {
  console.log(99);
  showSlide(slideIndex+1);
}

function moveToPrevSlide() {
  showSlide(slideIndex-1);
}

// změna slidu
function showSlide(n) {
  console.log(slideIndex);
  var i = 0;
  var slides = document.getElementsByClassName("comment-slide");

  if (n >= slides.length) {
    slideIndex = 0;
  }    
  else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  else {
    slideIndex = n;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slides[slideIndex].style.opacity = 1;
  console.log(slides[0]);
  console.log(slides[1]);
  console.log(slides[2]);
}
