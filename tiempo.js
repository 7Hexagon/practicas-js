var today = new Date();
var hora = today.getHours();
var min = today.getMinutes();

var extra = (Math.floor(Math.random() * (600 - 300)) + 300);
var num1 = Math.floor(extra/60);
var num2 = Math.floor(extra%60);

var hora1 = hora+num1;
var min1 = min+num2;

var time = today.getHours() + ":" + today.getMinutes();
console.log ("Hora actual: "+time);
console.log ("Valor Aleatorio Generado de Minutos: "+extra);
console.log ("Hora Final: "+hora1+":"+min1);