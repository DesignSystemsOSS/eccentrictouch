// carousel start

var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("et-slides-only-items");
  // var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}




var slideIndex_1 = 0;
showSlides_1(slideIndex_1);

function plusSlides(n) {
  showSlides_1(slideIndex_1 += n);
}

function currentSlide(n) {
  showSlides_1(slideIndex_1 = n);
}

function showSlides_1(n) {
  var i;
  var slides_1 = document.getElementsByClassName("et-slides-control-items");
  if (n > slides_1.length) {
    slideIndex_1 = 1
  }
  if (n < 1) {
    slideIndex_1 = slides_1.length
  }
  for (i = 0; i < slides_1.length; i++) {
    slides_1[i].style.display = "none";
  }
  slides_1[slideIndex_1 - 1].style.display = "block";
}
//carousel end
