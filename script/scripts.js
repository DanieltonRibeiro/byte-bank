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

const workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd')

workerDolar.addEventListener("message", (event) => {
    console.log(
    )
    const time = generateTime();
    const value = event.data.ask;
    printQuote(chartLabel, value);
    addData(dollarToChart, time, value);
})

