'use strict';

const faker = require('faker');

module.exports.prodGen= (typeLength, custLength)=>{

  let products = [];

  for (let i=0; i<10; i++) {
    let title = faker.commerce.productName();
    let price = faker.commerce.price();
    let description = faker.lorem.sentence();
    let type_id = Math.floor(Math.random() * typeLength) + 1;
    let customer_id = Math.floor(Math.random() * custLength) + 1;

    products.push({
      title,
      price,
      description,
      type_id,
      customer_id
    });
  }
  return products;
};