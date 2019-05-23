const chai = require('chai');
const expect = chai.expect;

const URL = 'http://localhost:8080';

describe('webdriver.io page', () => {
  it('should render main page', () => {
    browser.url(URL);

    expect(browser.getTitle()).to.equal('Whois ENS (Ethereum Name Service)');

    const h2 = $('h2').getText().trim();
    expect(h2).to.equal('Advanced detail information about any Ethereum address. 100% free and Open Source.');

    const inputEl = $('input');
    expect(inputEl.isExisting()).to.be.true;

    const buttonEl = $('button[type="submit"]');
    expect(buttonEl.isExisting()).to.be.true;

    expect($$('.cmp-widget-header li').length).to.equal(3);
  });

  it('should open other pages', () => {
    browser.url(URL);

    const headerItems = $$('.cmp-widget-header li');
    headerItems[1].click();

    $('iframe').waitForExist();
    browser.switchToFrame($('iframe'));

    browser.waitUntil(() => {
      return $('h1').getText().trim() === 'Whois ENS REST API';
    }, 10000);
  });
});
