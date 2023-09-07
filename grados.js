function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
posi=getRandomInt(360);
vueltas=(Math.floor(Math.random() * 11 - 5) +5);
pos2=getRandomInt(360);
meow=vueltas*pos2;
res=meow+posi;
fin=res%360
console.log("Posición o ángulo Inicial G.A.: ",posi);
console.log("Valor Aleatorio Generado en Grados: ",Math.floor(res));
console.log("Ángulo Final: ",Math.floor(fin));