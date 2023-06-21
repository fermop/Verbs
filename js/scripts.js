const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburger.onclick = () => navList.classList.toggle('toggle');