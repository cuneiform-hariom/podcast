// // password toggle 

// let eyeIcon = document.getElementById('password-toggle');
// let password = document.getElementById('passwordfield');

// eyeIcon.addEventListener("click", passwordtoggle);

// function passwordtoggle() {
//   if (password.type === "password") {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// }

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

// responsive menu 

let Hamburger = document.getElementById('menuIcon');
let Menu = document.getElementById('menu');

Hamburger.addEventListener("click", openmenu);

function openmenu() {
  Menu.classList.toggle("active");
  Hamburger.classList.toggle("active");
}

