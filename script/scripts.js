import selectQuote from './printQuote.js';

const dollarChart = document.getElementById('dollarChart');
const ieneChart = document.getElementById("ieneChart");
const chartLabelDollar = "dolar";
const chartLabelIene = "iene";

const dollarToChart = createChart({ elementSelected: dollarChart, label: chartLabelDollar });
const ieneToChart = createChart({ elementSelected: ieneChart, label: chartLabelIene });

function createChart({ elementSelected, label }){
    return new Chart(elementSelected, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: label,
                    data: [],
                    borderWidth: 1
                }
            ]
        },
    })
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

function workerInstance({ path, message }){
    const newWorker = new Worker(`./script/workers/${path}`);
    newWorker.postMessage(message);
    return newWorker;
}

function workerMessageEvent({worker, chartlabel, currenctToChart}){
    worker.addEventListener("message", (event) => {
        const time = generateTime();
        const value = event.data.ask;
        selectQuote(chartlabel, value);
        addData(currenctToChart, time, value);
    })
}

const workerDolar = workerInstance({ path: 'workerDolar.js', message: 'usd' });
const workerIene = workerInstance({ path: 'workerIene.js', message: 'iene' });

workerMessageEvent({ worker: workerIene, chartlabel: chartLabelIene, currenctToChart: ieneToChart });
workerMessageEvent({ worker: workerDolar, chartlabel: chartLabelDollar, currenctToChart: dollarToChart });


