// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
// Obtener referencia al botón de menú y al menú
// Obtener referencia al botón de menú y al menú

const icon = document.querySelector('.button');
const menu = document.querySelector('.navbar');

icon.addEventListener('click', () => {
    menu.classList.toggle('active');
});


