for (k=1;k<11;k++){
    vueltas = Math.floor(Math.random() * (11 - 5) + 5);
    rand = Math.floor(Math.random() * (37 - 0) + 0);
    num = vueltas * rand;
    res= num % 36;

    console.log("Nro de Juego: ",k);
    console.log("Valor Aleatorio Generado: ",Math.floor(num));
    console.log("Nro que cayó en la ruleta: ",Math.floor(res));
}
