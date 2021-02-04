//objects


//1. Literals and properties
const name = 'ellie';
const age = 4;

const ellie = {name : 'ellie', age:4};
console.log(ellie);

//2. Computed properties
console.log(ellie.name); //코딩하는 순간 값을 받아오고싶을때
console.log(ellie['name']); //어떤값일지 모를때 런타임시 정해질때

function makePerson(name, age){
    return {
        name,
        age,
    };
}

//5. in operator
console.log('name' in ellie);

//6. for..in vs for ..of 
// for (key in obj)
console.clear();

for (key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//cloning
const user = {name: 'ellie', age:'20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//첫번째 방법
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//두번째 방법
const user4 = {};
Object.assign(user4, user);
console.log(user4);