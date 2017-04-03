import { HumiDashboardPage } from './app.po';

describe('humi-dashboard App', () => {
  let page: HumiDashboardPage;

  beforeEach(() => {
    page = new HumiDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
