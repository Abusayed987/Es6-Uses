// P:01
function defaultPera(x = 1, y = 1) {
    const multiplyX = x * x;
    const multiplyY = y*y ;
    const sum = multiplyX+ multiplyY;
    return sum;
}
const result =  defaultPera(10);  // 101
console.log(result);
// P:02
function say(message = `hello World`){
    return message;
}
console.log(say(`Welcome to Our new Project`));
// P:03
function showSum(number1 = 0, number2 = 1){
    return number1 + number2;
}
const showResult = showSum(100+ 00); //100
console.log(showResult);