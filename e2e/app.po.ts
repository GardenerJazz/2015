export class GardenerJazzPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gardener-jazz-app h1')).getText();
  }
}
