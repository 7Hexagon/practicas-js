//Arrange
CantidadMinimaVueltas=5;
CantidadMaximaVueltas=10;
//Act
Vueltas=Math.floor(Math.random() * (CantidadMaximaVueltas+1 - CantidadMinimaVueltas) + CantidadMinimaVueltas);
Valor=Vueltas*37;
//Assert
test('Number that is less than 37*10 and 37*5', () => {
  expect(Valor).toBeGreaterThanOrEqual(37*5);
  expect(Valor).toBeLessThanOrEqual(37*10);
  });