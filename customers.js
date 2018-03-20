'use strict';

const faker= require('faker');

module.exports.custGen= ()=>{
  
    let customers= [];

    for (let i=0; i<10; i++){
        let firstName= faker.name.firstName();
        let lastName= faker.name.lastName();
        let phoneNumber= faker.phone.phoneNumberFormat();

    customers.push({
        "first_name": firstName,
        "last_name": lastName,
        "phone": phoneNumber,
        });
    }

  return customers;
}