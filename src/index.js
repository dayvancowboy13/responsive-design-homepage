import './style.css';
import portraitImg from './images/portrait.png';
import ProjectScrnSht from './images/project-screenshot.png';
import bottomPhoto from './images/bottom-photo.png';
import mePortrait from './images/me_portrait.jpg';
import bottomPortrait from './images/bottom-portrait-350x480.png';
import meWide from './images/bottom-wide-600x450.png';
import meTop from './images/me-header-450x500.png';


const headerDiv = document.querySelector('.img-container');
const img1 = new Image();
img1.src = meTop;
headerDiv.prepend(img1);

const footerImgContainer = document.querySelector('footer').querySelector('.img-container');
const img2 = new Image();
img2.src = bottomPhoto;
// footerImgContainer.append(img2);

footerImgContainer.innerHTML = `
<picture>
    <source media="(max-width: 799px)" srcset="${bottomPortrait}" />
    <source media="(max-width: 1099px)" srcset="${bottomPortrait}" />

    <img src="${meWide}">
</picture>
`;

const workCards = document.querySelectorAll('.work-card');


const scrnsht = new Image();
scrnsht.src = ProjectScrnSht;

for (let i = 0; i < workCards.length; i++) {

    workCards[i].querySelector('.img-container').innerHTML = scrnsht.outerHTML;


}