const puppeteer = require('puppeteer')
const expect = require('chai').expect

var pageExample = "http://www.example.com/"
var google = "https://www.google.com/"
var devExpress = "https://devexpress.github.io/testcafe/example/"
var messageA = "Howdy, my name is Moe"
var messageB = "Message 2"

describe('My First Puppeteer Test', ()=> {
  it('should launch the browser', async function () {
      


    const browser = await puppeteer.launch ({
      headless: true, 
  
     })

    const page = await browser.newPage()
    await page.goto(pageExample)
    const title = await page.title()
    const url = await page.url()
    const text = await page.$eval('h1', element => element.textContent)
    //  console.log('Text in he is ' + text)
     const par = await page.$eval('p', parCont => parCont.textContent)
    //  console.log('Par content is ' + par)
     const count = await page.$$eval('p', heat => heat.length)
    //  console.log('The count is: ' + count)
    expect(title).to.be.a('string', 'Example Domain')
    expect(url).to.include('example.com')
    expect(text).to.be.a('string', 'Example Domain')
    expect(par).to.include('in literature')
    expect(count).to.equal(2)
    await browser.close()
    
  })
})