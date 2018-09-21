import { ProjetocoachWebPage } from './app.po';

describe('projetocoach-web App', function() {
  let page: ProjetocoachWebPage;

  beforeEach(() => {
    page = new ProjetocoachWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
