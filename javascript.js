import axios from 'axios';



const selectEle = document.querySelector("select");
const response = document.querySelector(".guessResponse");

selectEle.addEventListener("change",setResponse);

function setResponse() {
    const userChoice = selectEle.value;
    switch(userChoice) {
        case "y":
            response.textContent = "You are a believer";
            break;
        case "n":
            response.textContent = "You are a doomer";
            break;
        default:
            response.textContent = ""
            break;
    }

}

