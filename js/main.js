let userName=prompt("What is your name?");
alert('Hello ' + userName);

const year = '2021';
let yearOfBirth=prompt("What is your year of birth?");
let inAll = year - yearOfBirth;
alert('You are ' + inAll +' years old.');

let sideSquare=prompt("Write the side of the square, please.");
let perimetr = sideSquare*4;
alert('The perimetr of the sguare is ' + perimetr);

const pi = '3.14'
let radiusCircle=prompt("Write the radius of the circle, please.");
let area = pi * radiusCircle*2;
alert( 'The area of the circle is ' + area);

let distance=prompt("What is the distance between cities in km?");
let timeUsers=prompt('How many hours do you want to get there?');
let speed = distance / timeUsers;
alert('You need to do ' + speed + ' km/h to arrive on time');


const dollarEuro = '0.89'
let currency=prompt("Write the amount of dollars, please.");
let converter = currency * dollarEuro;
alert('It is ' + converter + ' euro.')