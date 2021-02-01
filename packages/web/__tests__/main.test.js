//@ts-check

const { chromium, devices } = require('playwright');
const expect = require('expect');
let context;
let browser;
let page;

const pixel2 = devices['Pixel 2'];

const pageTitle = 'React Native';
const openSourceMobileText = 'Github';

beforeAll(async () => {
  browser = await chromium.launch();

  context = await browser.newContext({
    ...pixel2,
  });
});
afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await context.newPage();
});
afterEach(async () => {
  await page.close();
});

test('toggle mobile menu, and do dark mode switch', async () => {
  await page.goto('http://localhost:8000/');

  let sectionText = await page.$eval(`text=${pageTitle}`, e => e.textContent);

  expect(sectionText).toEqual(pageTitle);

  await page.click('#mobileButton');

  await page.click('data-test-id=switch');

  const openSourceMobileTextFinding = await page.$eval(
    `text=${openSourceMobileText}`,
    e => e.textContent,
  );

  expect(openSourceMobileTextFinding).toEqual(openSourceMobileText);

  await page.click('#mobileButton');

  sectionText = await page.$eval(`text=${pageTitle}`, e => e.textContent);

  expect(sectionText).toEqual(pageTitle);
});

test('navigate to the about page via menu', async () => {
  await page.goto('http://localhost:8000/');

  await page.click('#mobileButton');

  await page.click('a >> text=About');

  await page.waitForSelector('article >> text=Frontend/Mobile Engineer');

  const text = await page.$eval(
    'article >> text=Frontend/Mobile Engineer',
    e => e.textContent,
  );

  expect(text).toEqual('Frontend/Mobile Engineer');
});

test('navigate to a blog article', async () => {
  await page.goto('http://localhost:8000/');

  await page.click('#mobileButton');

  await page.click('a >> text=Blog');

  await page.waitForSelector('data-testid=blog-header-title');

  const listHeaderTitle = await page.$eval(
    'data-testid=blog-header-title',
    e => e.textContent,
  );

  await page.click(`data-testid=blog-header`);

  await page.waitForSelector('data-testid=blog-title');

  const headerTitle = await page.$eval(
    'data-testid=blog-title',
    e => e.textContent,
  );

  expect(headerTitle).toEqual(listHeaderTitle);
});
