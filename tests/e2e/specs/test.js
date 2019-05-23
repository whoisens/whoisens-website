const chai = require('chai');
const expect = chai.expect;
const dataset = require('whoisens-test-dataset/dataset/whoisens.eth.json');

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

  it('should work name resolving', () => {
    const checkingName = dataset.eth_names[0];

    browser.url(URL);

    $('button[type="submit"]').waitForExist();
    $('button[type="submit"]').click();

    $('.cmp-page-lookup').waitForExist();
    $('.info').waitForExist();

    browser.waitUntil(() => {
      return $$('.cmp-page-lookup .info > li').length === 3;
    }, 5000);

    const reverseAddr = checkingName.resolved_address.slice(2) + '.addr.reverse';

    expect($('li:nth-child(1) .title h3').getText().trim(), `Name information [${checkingName.name}]`);
    expect($('li:nth-child(1) .info li:nth-child(1) .title .value a').getText().trim()).to.equal(dataset.owner);
    expect($('li:nth-child(1) .info li:nth-child(2) .title .value a').getText().trim()).to.equal(checkingName.controller);

    expect($('li:nth-child(2) .title h3').getText().trim(), `Forward lookup [${checkingName.name}]`);
    expect($('li:nth-child(2) .info li:nth-child(1) .title .value a').getText().trim()).to.equal(checkingName.resolved_address);
    expect($('li:nth-child(2) .info li:nth-child(2) .title .value a').getText().trim()).to.equal(checkingName.resolved_content);

    expect($('li:nth-child(3) .title h3').getText().trim(), `Reverse lookup [${reverseAddr}]`);
    expect($('li:nth-child(3) .info li:nth-child(1) .title .value a').getText().trim()).to.equal(checkingName.reverse_resolved_address);
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
