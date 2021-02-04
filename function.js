//1. Function
//함수는 한가지 일만 하게 작성
//이름을 동사형으로

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log("Hello@");
log(1234);

//2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name :'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by $(from)`);
}
showMessage('Hi!')

//5. Local scope
let global = 'global'; //전역변수
function printMessage(){
    let message = 'hello';
    console.log(message); //지역변수
    console.log(globalMessage);

}
//printMessage();

//조건이 맞지 않는경우 바로 return 하기
let sum; 

//2. Callback function using function expression
function randomQuiz(answer,printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}

const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a +b;

//IIFE : 선언함과 동시에 호출