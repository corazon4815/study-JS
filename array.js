//Array

//1. 배열 선언 방법 
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['사과','바나나', '딸기'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

//3. 돌려서 모두 출력하기 
for(let i in fruits){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function( fruit, index, array) {
    console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit))

fruits.push('망고','레몬','귤');
console.log(fruits);
//fruits.splice(1); //1부터 모두 지워버림 
//console.log(fruits); 
fruits.splice(1,1); //1부터 1개를 지우겠다
console.log(fruits);
fruits.splice(1,1,'포도'); //1부터 1개를 지우고 포도를 넣겠다
console.log(fruits);

// 5. Searching
// index찾기
//indexOf : 첫번째에 있는거의 위치를 말해줌
//lastIndexOf : 마지막에 있는거의 위치를 말해줌
//includes : 포함하고있는지 boolean타입으로 알려줌
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.includes('사과')); 
fruits.push('사과');
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));































