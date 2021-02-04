//1. String concatenation
console.log('my'+'cat'); //문자열 문자열 합함
console.log('1' + 2); //12 
console.log(`string literals: 1+2 = ${1+2}`);

//2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increament and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement);
const postIncrement = counter++;
console.log(postIncrement);
console.log(counter);

//4. Assigment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal 

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//  || (or) //true가 하나라도 있으면 true가 나옴
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for(let i in 10){
        console.log('&');
    }
    return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFve = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFve);
console.log(stringFive != numberFve);

// === strict equality, no type conversion
console.log(stringFive === numberFve);
console.log(stringFive !== numberFve);

//object equality by reference
const ellie1 = { name : 'ellie'};
const ellie2 = { name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//f f t f t f 

//8. Conditional operators : if
//if, else if, else
const name ='df';
if(name === 'ellie'){
    console.log('Welcome,Ellie!');
    
} else if (name==='coder'){
    console.log('You are amazing coder');

} else {
    console.log('unkwnon');
}

//9. Ternary operator:?
// condition ? value1 : value2;
console.log(name === 'ellie'?'yes':'no');

//10. Swich 
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}

//11. Loops
let i = 3;
while (i>0){
    console.log(`while:${i}`);
    i--;
}

do{
    console.log(`do while : ${i}`);
    i--;
}while(i>0); //검사하고 이때 멈추게됨

//12. for문

for (i= 3; i > 0; i--){
    console.log(`for: ${i}`)
}

for(let i = 3; i>0; i=i-2){
    console.log(`inline variable for: ${i}`);
}
























