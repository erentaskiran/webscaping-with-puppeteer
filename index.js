const puppeteer =require('puppeteer');

let isim=[];
let fiyat=[];

( async() => {
    const browser = await puppeteer.launch({
        headless:false,
        defaultViewport:false,
        UserDataDir:"./tmp"
    });
    const page=await browser.newPage();
    await page.goto('https://www.amazon.com/s?k=gaming+keyboard&pd_rd_r=5326746e-a21d-4e47-9189-85920b4f8523&pd_rd_w=1LHSm&pd_rd_wg=MTilk&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=S5H8AGCN1CHA6JMT8PWZ&ref=pd_gw_unk')

    const Name =await page.$$('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2')
    let f=0;
    for(const Names of Name)
    {
        

        isim[f] =await page.evaluate(el=>el.querySelector(" h2 > a > span").textContent,Names);
        console.log(isim[f]);
        f++;
        
    }
    
    const cost =await page.$$('.a-row.a-size-base.a-color-base')
    let i=0;
    for(const costs of cost)
    {
        
        fiyat[i] =await page.evaluate(el=>el.querySelector("  div.a-row.a-size-base.a-color-base > a > span:nth-child(1) > span.a-offscreen").textContent,costs);
        console.log(fiyat[i]);
        i++;
        
    }
    console.log(isim);
    console.log(fiyat);
    
})();

