import './style.css';
import portraitImg from './images/350x350.png';

const headerDiv = document.querySelector('.img-container');

const img1 = new Image();
img1.src = portraitImg;


headerDiv.prepend(img1);