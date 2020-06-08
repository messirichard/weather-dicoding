import "./script/api.js"
import "./script/main.js"
import "./style/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./script/title.js"
import bg from './images/background.jpg';
import './images/idcamp-circle.png';

const mybg = new Image(); 
mybg.src = bg; 
element.appendChild(mybg);

// Membuat element secara sintaksis jika element tidak terdapat pada DOM
if (!document.querySelector("title")) {
    const TitleElement = document.createElement("title");

    TitleElement.setAttribute("h2", "Weather App Dicoding");
    TitleElement.setAttribute("h3", "Search City name");

    document.body.appendChild(TitleElement);
}