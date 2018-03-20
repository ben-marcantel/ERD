
const { createWriteStream } = require('fs');
const { productTypes } = require('./products');
const { custGen } = require('./customers');
const { prodGen } = require('./productType');


let customers = custGen();
let custStream = createWriteStream(`customers.json`);
custStream.write(JSON.stringify(customers));


let products = prodGen(productTypes.length, customers.length);
let prodStream = createWriteStream(`products.json`);
prodStream.write(JSON.stringify(products));