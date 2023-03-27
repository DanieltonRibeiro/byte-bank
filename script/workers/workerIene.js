addEventListener("message", _ => {
  conectAPI();
  setInterval(() => conectAPI(), 10000);
})

async function conectAPI(){
  const conect = await fetch('https://economia.awesomeapi.com.br/json/last/JPY-BRL');
  const translatedConnection = await conect.json();
  postMessage(translatedConnection.JPYBRL);
}
