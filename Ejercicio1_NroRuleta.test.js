//Arrange

//Act
NroRuleta=Math.floor(Math.random() * (37 - 0) + 0);
//Assert
test('Number between 0 and 36', () => {
    expect(NroRuleta).toBeGreaterThanOrEqual(0);
    expect(NroRuleta).toBeLessThanOrEqual(36);
  });