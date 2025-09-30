import { readDataFromExcelFile,writeDatatoExcelFile } from "../Utitility/readDataExcel.js";
import {test} from "@playwright/test";

//FETCH SINGLE DATA
test('readData', async() => {

    const data = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',1,1 )
    console.log(data);
    
})

//FETCH MULTIPLE ROW AND COLUMN DATA
// test('readData', async() => {

//     const result = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx' )
//     console.log(result);
    
// })



//ONLY FETCH SINGLE ROW DATA
// test('readData', async() => {

//     const final = await readDataFromExcelFile('Sheet1', 'testdata/testdata.xlsx',2 )
//     console.log(final);
    
// })

//WRITE SINGLE DATA TO EXCEL
// test('writeData', async() => {
//     await writeDatatoExcelFile('testdata/testdata.xlsx','Sheet5',3,4)
// })
