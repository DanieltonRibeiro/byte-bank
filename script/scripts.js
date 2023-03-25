const dollarChart = document.getElementById('dollarChart');

const dollarToChart = new Chart(dollarChart, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
});

async function conectAPI() {
    const conect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const translatedConnection = await conect.json();
    console.log(translatedConnection);
}

conectAPI();
