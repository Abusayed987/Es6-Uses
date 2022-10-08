//     M_____A_____P   => Morph    Array   Piece-By-Peach !
//     M_____A_____P   => Morph    Array   Piece-By-Peach !
//     M_____A_____P   => Morph    Array   Piece-By-Peach !

// p:01 make double----------------------------
const numbers = [1, 2, 3, 4, 5];
const doubleFn = num => num * 2;
const double = numbers.map(doubleFn);
// console.log(double);

// p:02 get sum 5 ------------------------------
const numbers2 = [21, 23, 43, 45, 56, 67, 78, 78];
const getSumAdded5 = numbers2.map(num => num + 5);
console.log(getSumAdded5);
// p:03 divided by 2 ---------------------------------
const numbers3 = [12, 23, 34, 4556, 677, 78, 89, 0, 4332];
const dividedBy2 = numbers3.map(x => x / 2);
console.log(dividedBy2)

// p:04 make threebled-----------------------------------------
const numbers4 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
const makeQuibByMap = numbers4.map(y => y * y * y);
console.log(makeQuibByMap);
