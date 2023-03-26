import printQuote from './printQuote.js';

const dollarChart = document.getElementById('dollarChart');
const chartLabel = "Dólar";

const dollarToChart = new Chart(dollarChart, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: chartLabel,
            data: [],
            borderWidth: 1
        }]
    },
});

async function conectAPI() {
    const conect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const translatedConnection = await conect.json();
    const time = generateTime();
    const value = translatedConnection.USDBRL.ask;
    addData(dollarToChart, time, value);
    printQuote(chartLabel, value);
}

function generateTime(){
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function addData(chart, label, data){
    chart.data.labels.push(label)
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data)
    })
    chart.update();
}

generateTime()
setInterval(() => conectAPI(), 8000)
