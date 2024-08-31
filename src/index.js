import './style.css';
import portraitImg from './images/350x350.png';
import ProjectScrnSht from './images/project-screenshot.png';

const headerDiv = document.querySelector('.img-container');

const img1 = new Image();
img1.src = portraitImg;


headerDiv.prepend(img1);

const workCards = document.querySelectorAll('.work-card');
console.log(workCards);


const scrnsht = new Image();
scrnsht.src = ProjectScrnSht;

console.log(scrnsht);

for (let i = 0; i < workCards.length; i++) {

    console.log(workCards[i].querySelector('.img-container'));

    workCards[i].querySelector('.img-container').innerHTML = scrnsht.outerHTML;

    console.log(workCards[i].querySelector('.img-container'));

}