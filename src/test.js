const puppeteer = require('puppeteer-extra');
const pluginStealth = require("puppeteer-extra-plugin-stealth");
const fs = require('fs');
// const schedule = require('node-schedule')
// const {installMouseHelper} = require('./extras/install_mouse_helper');
require('dotenv').config()
puppeteer.use(pluginStealth())

const runSnkrBot = async () => {

const browser = await puppeteer.launch({headless: false
    // args: ['--disable-infobars'],
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' //use chrome insted chromium
  });
  const page = await browser.newPage();
  await page.goto('https://www.nike.com/mx/launch/t/drifter-gator-ispa-coastal-blue-volt');
  let selector = '.join-log-in';
  await page.evaluate((selector) => document.querySelector(selector).click(), selector);


  await page.waitForSelector('.buy-button--notifyme');
	await page.waitFor(500);
			
  await page.evaluate(() => 
    document.querySelectorAll(".buy-button--notifyme")[0].click()
  )
  
}
runSnkrBot()