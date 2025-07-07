
import "./style.css";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';


function clearContent() {
    document.getElementById('content').innerHTML = '';
}

document.getElementById('home-btn').addEventListener('click', () => {
    clearContent();
    loadHome();
});


document.getElementById('menu-btn').addEventListener('click', () => {
    clearContent();
    loadMenu();
});

document.getElementById('contact-btn').addEventListener('click', () => {
    clearContent();
    loadContact();
});


loadHome();