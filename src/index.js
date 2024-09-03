import './style.css';
import portraitImg from './images/portrait.png';
import ProjectScrnSht from './images/project-screenshot.png';
import bottomPhoto from './images/bottom-photo.png';

const headerDiv = document.querySelector('.img-container');
const img1 = new Image();
img1.src = portraitImg;
headerDiv.prepend(img1);

const footerImgContainer = document.querySelector('footer').querySelector('.img-container');
const img2 = new Image();
img2.src = bottomPhoto;
footerImgContainer.append(img2);

const workCards = document.querySelectorAll('.work-card');


const scrnsht = new Image();
scrnsht.src = ProjectScrnSht;

for (let i = 0; i < workCards.length; i++) {

    workCards[i].querySelector('.img-container').innerHTML = scrnsht.outerHTML;


}