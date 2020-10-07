import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.event .eventDetails');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .event-detailsButton');
    const extra = await page.$('.event .eventDetails');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .event-detailsButton');
    const extra = await page.$('.event .eventDetails');
    expect(extra).toBeNull();
  });

});

describe('filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250
    });

    page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('by default events will load by location', async () => {
    const extra = await page.$('.event');
    expect(extra).toBeDefined();
  });

  test('by default suggestions will not be shown', async () => {
    const extra = await page.$('.suggestions li');
    expect(extra).toBeNull();
  });

  test('user can type in their city to see results', async () => {
    const extra = await page.$('.suggestions');
    await page.type('.city', 'Munich')
    expect(extra).toBeDefined();
  })
})
