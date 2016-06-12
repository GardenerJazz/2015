import { GardenerJazzPage } from './app.po';

describe('gardener-jazz App', function() {
  let page: GardenerJazzPage;

  beforeEach(() => {
    page = new GardenerJazzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gardener-jazz works!');
  });
});
