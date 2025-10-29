import { test } from "@playwright/test";
import { home } from "../FK_POM/home.page";
import { Bookings } from "../FK_POM/booking.page";
import { FlightDetails } from "../FK_POM/flightDetails.page";
import  tdata  from "../testdata/FKData.json";

test('booking the flight', async({browser}) =>{
    const contec = await browser.newContext(
        {
            permissions:[]
        }
    )

    const page = await contec.newPage()

    const homeobj = new home(page)
    homeobj.homepageF()
     await page.waitForTimeout(2000)

    const bookingobj = new Bookings(page)
    await bookingobj.boookingF(tdata.from, tdata.to)
    await page.waitForTimeout(2000)

    const flightdetailsobj = new FlightDetails(page)
    await flightdetailsobj.flightdeatilsF()
    await page.waitForTimeout(2000)

})