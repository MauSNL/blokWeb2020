// JavaScript Document
const span = document.querySelector('span');
const menu = document.querySelector('header')
const button = document.querySelector('.click')
const logo = document.querySelector('.logo')
let imgUrl = ["images/logo.png", "images/logo_alt.png"]

button.addEventListener('click', function(){
  span.classList.toggle('active');
  menu.classList.toggle('menu');

  if(logo.getAttribute("src") ===imgUrl[0]){
  logo.setAttribute("src",imgUrl[1])
  }else{

  logo.setAttribute("src",imgUrl[0])
  }
}, false);
