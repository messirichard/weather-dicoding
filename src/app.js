import "./script/api.js"
import "./script/index.js"
import "./style/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./script/title.js"
import bg from './images/background.jpg';
import './images/idcamp-circle.png';

const mybg = new Image(); 
mybg.src = bg; 
element.appendChild(mybg);

if (!document.querySelector("title")) {
    const TitleElement = document.createElement("title");

    document.body.appendChild(TitleElement);
}