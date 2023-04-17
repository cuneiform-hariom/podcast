function scrollValue() {
    var navbar = document.querySelector('.navbar');
    var scroll = window.scrollY;
    if (scroll < 50) {
      navbar.classList.remove('BgColour');
    } else {
      navbar.classList.add('BgColour');
    }
  }
  
  window.addEventListener('scroll', scrollValue);
  