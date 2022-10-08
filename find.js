const numbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const evenFirstOne = numbers.find( num => num%2 === 0)
// console.log(evenFirstOne);

// p:02
const products = [
    { id: 01, name: 'laptop', price: 100 },
    { id: 02, name: 'laptop', price: 500 },
    { id: 03, name: 'laptop', price: 1000 },
    { id: 04, name: 'laptop', price: 1500 },
];
const cepRateLaptop = products.find(laptop => laptop.price > 100);
console.log(cepRateLaptop);
// p:03
const allNumbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const dividedBy5 = allNumbers.find( num => num%5 === 0);
// console.log(dividedBy5);