describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should tap on button by id and expect some text to be visible', async () => {
    await element(by.id('ButtonID')).tap();
    await expect(element(by.text('The button has been pressed'))).toBeVisible();
  });
});
