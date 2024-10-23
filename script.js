
// navbar
let menu = document.querySelector(".menu");
let nav = document.querySelector("#navbar"); // Corrected selector

const togglenavbar = () => {
     nav.classList.toggle('active'); // Corrected class name
}

menu.addEventListener("click", () => {
   togglenavbar();
});
// header
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    deley: 2000

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





