import excel  from "exceljs";
//import path from "path";

//READ SINGLE DATA FROM EXCEL FILE
 export async function readDataFromExcelFile(sheetname, path, rownum,cellnum){

    const book = new excel.Workbook()
    await book.xlsx.readFile(path)
    const sheet = await book.getWorksheet(sheetname)
    const data =  sheet.getRow(rownum).getCell(cellnum).value

    return data

}



//READ MULTIPLE DATA FROM EXCEL FILE
// export async function readDataFromExcelFile(sheetname, path){

//     const book = new excel.Workbook()
//     await book.xlsx.readFile(path)
//     const sheet = await book.getWorksheet(sheetname)

//     const data =[]
//     for(let row = 1; row <= sheet.rowCount; row ++){
//         const rowdata = []
//         for(let column = 1; column<=sheet.columnCount; column ++){

//             const cellValue =  sheet.getRow(row).getCell(column).value
//             rowdata.push(cellValue)
//         }
//         data.push(rowdata)
//     }
//     return data
//}



//READ ONLY ROWS FROM EXCEL FILE 
// export async function readDataFromExcelFile(sheetname, path,rownum){

//     const book = new excel.Workbook()
//     await book.xlsx.readFile(path)
//     const sheet = await book.getWorksheet(sheetname)
//     let rowdata =[]

//     for(let i = 1; i <= sheet.columnCount; i ++){
        

//             const result  =  sheet.getRow(rownum).getCell(i).value
//             rowdata.push(result)
        
//     }
//     return rowdata
// }

// //WRITE SINGLE DATA TO EXCEL FILE
// export async function writeDatatoExcelFile(path, sheetname,rownum,cellnum)
//  {
//     const book = await new excel.Workbook()
//     await book.xlsx.readFile(path)
//     //const sheet = await book.getWorksheet(sheetname)// add data to existing sheet
//     const sheet = await book.addWorksheet(sheetname)// to add data to new sheet
//      sheet.getRow(rownum).getCell(cellnum).value= 'hello'
//     await book.xlsx.writeFile(path)

//  }
    //getworksheet --> same worksheet
    //addworksheet --> create new worksheet
    //readfile --> if not passed, it wil override the prevvious sheet with new one.

