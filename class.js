//class -> 템플릿 (ES6에서 새로 추가됨)

//1. 클래스
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //메소드
    speak(){
        console.log(`${this.name}: hello!`);
    }
}
 
const ellie = new Person('ellie', 20);
ellie.speak();

//2. getter setter
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this. age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value <0 ? 0 :value;
    }
}
const user1 = new User('Steve','job', -1);
console.log(user1.age);

