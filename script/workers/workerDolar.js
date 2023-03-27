async function conectApi(){
  const conect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
  const translatedConnection = await conect.json();
  postMessage(translatedConnection.USDBRL);
}

addEventListener("message", (event) => {
  conectApi();
  setInterval(() => conectApi(), 10000);
})
