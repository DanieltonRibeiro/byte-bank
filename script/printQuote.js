const list = document.querySelector('[data-list]');

function printQuote(name, value){
  list.innerHTML = '';

  for( let multiplier = 1; multiplier <= 1000; multiplier *= 10 ){
    const listItem =  document.createElement('li');
    listItem.innerHTML = `${multiplier} ${name}: R$${(value * multiplier).toFixed(2)}`;
    list.append(listItem);

  }
}

export default printQuote;
