const puppeteer = require ('puppeteer')

var pageExample = "http://www.example.com/"


describe('Device Emulation', () => {
    let browser
    let page

    before(async function () {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        })
        page = await browser.newPage()
        // await page.setDefaultTimeout(10000)
        // await page.setDefaultNavigationTimeout(20000)
    })

    after(async function() {
        await browser.close()
    })

    it('Desktop Device Test', async function() {
        await page.setViewport({width: 1650, height: 1050})
        await page.goto(pageExample)
        // await page.waitFor(5000)
    })

    it('Tablet Device Test', async function() {
        const tablet = puppeteer.devices['Ipad landscape']
        await page.emulate(tablet)
        await page.goto(pageExample)
        // await page.waitFor(5000)
    })

    it('Mobile Device Test', async function() {
        const mobile = puppeteer.devices['Iphone x']
        await page.emulate(mobile)
        await page.goto(pageExample)
        // await page.waitFor(5000)

        
    })
})