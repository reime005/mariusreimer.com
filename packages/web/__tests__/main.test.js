//@ts-check
const pageTitle = 'React Native';
const openSourceMobileText = 'Github';

beforeAll(async () => {
  await page.goto('http://localhost:8000/');
});

test('toggle mobile menu, and do dark mode switch', async () => {
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
  await page.click('#mobileButton');

  await page.click('a >> text=About');

  await page.waitForSelector('article >> text=Mobile Engineer');

  const text = await page.$eval(
    'article >> text=Mobile Engineer',
    e => e.textContent,
  );

  expect(text).toEqual('Mobile Engineer');
});

test('navigate to a blog article', async () => {
  await page.click('#mobileButton');

  await page.click('a >> text=Blog');

  await page.waitForSelector('data-testid=blog-header-title');

  const listHeaderTitle = await page.$eval(
    'data-testid=blog-header-title',
    e => e.textContent,
  );

  await page.click(`a >> aria-label=${listHeaderTitle}`);

  await page.waitForSelector('data-testid=blog-title');

  // await page.screenshot({ path: Date.now() / 1000 + '_test.png' });

  const headerTitle = await page.$eval(
    'data-testid=blog-title',
    e => e.textContent,
  );

  expect(headerTitle).toEqual(listHeaderTitle);
});
