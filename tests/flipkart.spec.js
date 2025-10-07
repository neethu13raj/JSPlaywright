
import { test } from "@playwright/test";
import { home } from "../FK_POM/home.page";

test('click on flight icon', async({page}) => {

    const homeobj = new home(page)

    homeobj.homepageF() 
    await page.waitForTimeout(2000)
})