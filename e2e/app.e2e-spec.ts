import { MyuniversalPage } from './app.po';

describe('myuniversal App', function() {
  let page: MyuniversalPage;

  beforeEach(() => {
    page = new MyuniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
