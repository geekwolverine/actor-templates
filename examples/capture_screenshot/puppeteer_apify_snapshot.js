const Apify = require('apify');

Apify.main(async () => {
    const url = 'http://www.example.com/';
    // Start a browser
    const browser = await Apify.launchPuppeteer();
    // Open new tab in the browser
    const page = await browser.newPage();
    // Navigate to the URL
    await page.goto(url);
    // Capture the screenshot
    await Apify.utils.puppeteer.saveSnapshot(page, { key: 'my-key', saveHtml: false });
    // Close Puppeteer
    await browser.close();
});
