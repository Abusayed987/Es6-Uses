// P:01
const obj = {
    name: 'sayed',
    age: 20,
    id: 2,
    level: 10,
}
const { name, age, id, level } = obj;
console.log(age);
console.log(level);
// P:02
const mobilr = {
    book: `al Quran`,
    mobile: 'xiomi',
    laptop: 'macbook',
    relegion: 'islam'
}
const { book, relegion } = mobilr; // object er somay same name tai dite hobe
console.log(relegion);
// P:03
const medicine = {
    medicineType: 'Homio',
    cost : 2500,
    totalMedecineNumber : 6,
    khaiteHobe : `3 mash`,
}
const {khaiteHobe, medicineType} = medicine;
console.log(khaiteHobe, medicineType);