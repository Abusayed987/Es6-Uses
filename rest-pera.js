// P:01
function restPera1(a, b, c, d, e, ...z) {
    console.log(a, b, c, d, e, z);
}
restPera1(1, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 11, 22, 33, 44, 55, 666, 7, 7, 88, 99)

// P:02
function restPera2(...baba) {
    console.log(baba);
}
restPera2('abu', 'sayed', 'abdullah', 'sayef');
// P:03
function restPera3(...maa) {
    console.log(maa);
}
restPera3('sayed', 'abu', 'sayef', 'abdullah');