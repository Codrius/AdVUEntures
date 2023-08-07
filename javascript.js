

const paragraph = document.querySelector(".dynamicData");

axios.get("https://raw.githubusercontent.com/Codrius/AdVUEntures/main/stockdata.json")
    .then(stockjson => {
        const stockdata = stockjson.data;
        const openPrice = stockdata["Time Series (Daily)"]["2023-08-04"]["1. open"];
        const closePrice = stockdata["Time Series (Daily)"]["2023-08-04"]["4. close"];
        const stockChange = (parseFloat(openPrice) - parseFloat(closePrice)).toFixed(2);
        
        if (stockChange>0) {
            paragraph.textContent = `If you look at the stock values, the stock increased by $${stockChange} yesterday.  This is indicative of how the game is absolutely BOOMING right now, and is in the best state it has ever been.`;
        } else if (stockChange<0) {
            paragraph.textContent = `If you look at the stock values, the stock decreased by $${stockChange} yesterday.  This is indicative of how the game is absolutely DYING right now, and is in the worse state it has ever been.`
        } else {
            paragraph.textContent = `If you look at the stock values, the stock didn't change AT ALL yesterday. This is indicative of how the game is absolutely STAGNANT right now, and is in the most boring state it has ever been.`
        }
    })
    .catch(error => {console.error(error)})