const list = document.querySelectorAll('[data-list]');

function selectQuote(name, value) {
  list.forEach((selectedList) => {
    if (selectedList.id === name) {
      printQuote(selectedList, name, value);
    }
  });
}

function printQuote(selectedList, name, value) {
  selectedList.innerHTML = '';
  const plural = {
    dolar: "dolares",
    iene: "ienes"
  }

  for (let multiplier = 1; multiplier <= 1000; multiplier *= 10) {
    const listItem = document.createElement('li');
    const currencyName = multiplier === 1 ? name : plural[name];
    listItem.innerHTML = `${ multiplier } ${ currencyName }: R$${ (value * multiplier).toFixed(2) }`;
    selectedList.append(listItem);

  }
}

export default selectQuote;
