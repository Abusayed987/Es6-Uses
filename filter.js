const numbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

// p:02
const products = [
    { id: 01, name: 'laptop', price: 10002 },
    { id: 01, name: 'laptop', price: 100 },
    { id: 01, name: 'laptop', price: 10000 },
    { id: 01, name: 'laptop', price: 100000 },
];
const itemsPrice = products.filter( item => item.price < 1000)
// console.log(itemsPrice[0].price);
// p:03
const allNumbers = [12, 23, 65, 87, 89, 90, 86, 6543, 32];
const dividedBy5 = allNumbers.filter( num => num%5 === 0);
console.log(dividedBy5);