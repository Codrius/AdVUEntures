const paragraph = document.querySelector(".dynamicData");
let openPrice;
let closePrice;

axios.get("https://raw.githubusercontent.com/Codrius/AdVUEntures/main/stockdata.json")
    .then(stockjson => {
        const stockdata = stockjson.data;
        openPrice = stockdata["Time Series (Daily)"]["2013-08-04"]["1. open"];
        paragraph.textContent = openPrice;
    })
    .catch(error => {console.error(error)})
