import { MinePage } from './app.po';

describe('mine App', () => {
  let page: MinePage;

  beforeEach(() => {
    page = new MinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
