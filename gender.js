const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Kurt', 'Michael', 'George', 'Jarosław'];
const femaleNames = ['Christina', 'Krystyna', 'Diana', 'Ola'];
const lastNames = ['Aguillera', 'Cobain', 'Jackson', 'Michael', 'Czubówna', 'Kaczyński'];

const arr = [genders, maleNames, femaleNames, lastNames];

const randChoice = () => {  
  return arr[Math.floor(arr.length * Math.random())];
};

const people = [];

// for (let i = 0; i < 20; i++) { } 

const jsonString = JSON.stringify(people);

fs.writeFile('people.json', jsonString, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
