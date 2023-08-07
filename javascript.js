import axios from 'axios';

const paragraph = document.querySelector(".dynamicData");
let openPrice;
let closePrice;

axios.get("https://raw.githubusercontent.com/Codrius/AdVUEntures/main/stockdata.json")
    .then(stockjson => {
        const data = stockjson.data;
        paragraph.textContent = data
    })
    .catch(error => {console.error(error)})
