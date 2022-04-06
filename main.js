// Make image slide when prev, next is clicked
let slideIndex = 1;
function plusSlides(n, projectName) {
  showSlides(slideIndex += n, projectName);
}

function currentSlide(n) {
  showSlides(slideIndex == n);
}

function showSlides(n, projectName) {
  let slides = [];
  if("alwayswithus" == projectName) {
    slides = document.getElementsByClassName('alwayswithus');
  } else if("portfolio" == projectName) {
    slides = document.getElementsByClassName('portfolio');
  }
  if(n > slides.length) { slideIndex = 1; }
  if(n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";
}

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(!link) {
    return;
  } else {
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
  }
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me"
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#about');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle click on the "arrow up" button
const arrowUp = document.querySelector('.arrow__up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});
arrowUp.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});