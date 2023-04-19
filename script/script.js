function scrollValue() {
    var navbar = document.querySelector('.nav');
    var scroll = window.scrollY;
    if (scroll < 50) {
      navbar.classList.remove('small');
    } else {
      navbar.classList.add('small');
    }
  }
  
  window.addEventListener('scroll', scrollValue);
  

// -------login popup

// loginBtn = document.getElementById('login-btn');
// loginForm = document.getElementById('login');
// closeBtn = document.getElementById('closebtn');
// SignupBtn = document.getElementById('signup-btn');
// SignupForm = document.getElementById('signup');
// closeSignupBtn = document.getElementById('closesignup');


// loginBtn.addEventListener("click", openlogin);

// function openlogin() {
//   loginForm.classList.add("open");
// }

// closeBtn.addEventListener("click", close);

// function close() {
//   loginForm.classList.remove("open");
// }

// SignupBtn.addEventListener("click", opensignup);

// function opensignup() {
//   SignupForm.classList.add("open");
// }

// closeSignupBtn.addEventListener("click", closesignup);

// function closesignup() {
//   SignupForm.classList.remove("open");
// }


// responsive menu 

let Hamburger = document.getElementById('menuIcon');
let Menu = document.getElementById('menu');

Hamburger.addEventListener("click", openmenu);

function openmenu() {
  Menu.classList.toggle("active");
  Hamburger.classList.toggle("active");
}
