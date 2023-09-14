//Arrange
NroDeJuegoAnterior=5
//Act
NroDeJuegoActual=6
//Assert
test('Number between 1 and 10, that is one number more than the last variable', () => {
    expect(NroDeJuegoActual).toBe((NroDeJuegoAnterior+1));
    expect(NroDeJuegoActual).toBeGreaterThan(0);
    expect(NroDeJuegoActual).toBeLessThan(11);
  });