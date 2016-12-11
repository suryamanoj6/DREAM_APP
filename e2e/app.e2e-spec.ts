import { DREAMAPPPage } from './app.po';

describe('dream-app App', function() {
  let page: DREAMAPPPage;

  beforeEach(() => {
    page = new DREAMAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
