//1. Use strict

'use strict';

//2. Variable 변수
//var hoisting : 어디서 선언했냐에 상관없이 끌어올려줌
{
let name = 'sujin';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name)

{
    age = 4;
    var age;
}
console.log(age); //나옴 (var는 {}를 신경쓰지않음)

{
    let age;
    age = 4;

}
//console.log(age); //안나옴

//3. Constant
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types //숫자도 let으로 가능 
const count = 17; //숫자
const size = 17.1; // 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof count}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn ='not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 1212131213131121231231231231313211312312312345654563n; //over (-2*53) ~ 2*53)
console.log(typeof bigInt);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(greeting, typeof greeting)
const helloBob = `hi ${brendan}!`;
console.log(helloBob, typeof helloBob);

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value
const canRead = true;
const test = 3<1; 
console.log(canRead);
console.log(test);

let nothing = null;
console.log(nothing);
let x;
console.log(x);

//symbol : 특별한 식별자가 필요할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); //둘이 다름
console.log(symbol1===symbol2)
console. log(`value: ${symbol1.description}, type:${typeof symbol1}`) 
//symbol은 항상 string으로 변환해서 실행해야함

//Dynamic typing (자동으로 타입을 바꿔줌)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text =1;
console.log(`value: ${text}, type: ${typeof text}`);
text ='7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //타입을 number로 바꿔줌 
//console.log(text.charAt(0));  //number로 바꼈기때문에 오류남 

//object, real-life object, data structure 오브젝트 
const ellie = {name :'ellie', age:20};
console.log(ellie);
ellie.age = 21;
console.log(ellie);







