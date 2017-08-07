import { BlackJackPage } from './app.po';

describe('black-jack App', () => {
  let page: BlackJackPage;

  beforeEach(() => {
    page = new BlackJackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
