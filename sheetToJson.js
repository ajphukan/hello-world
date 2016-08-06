if(typeof require !== 'undefined') 
	XLSX = require('xlsx');
var workbook = XLSX.readFile('book.xlsx');
/* DO SOMETHING WITH workbook HERE */
var first_sheet_name=workbook.SheetNames[0];// it provide array of sheet names , Iam selecting the one
var worksheet=workbook.Sheets[first_sheet_name];//getting the worksheeet data of the 1 st sheeet
var Json = XLSX.utils.sheet_to_json(worksheet);
console.log(Json);
var header=[];
for(s in Json[0]) header.push(s); 
console.log(header);	