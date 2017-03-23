import { AfricaGeekPage } from './app.po';

describe('africa-geek App', function() {
  let page: AfricaGeekPage;

  beforeEach(() => {
    page = new AfricaGeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
