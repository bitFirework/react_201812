//p53.js
let arr = [10, 20, 30, 40];
let [a, b, c] = arr;
console.log(a,b,c); // 10, 20, 30

let p1 = { name: "홍길동", age:20, gender:"M"};

let { name, age, gender} = p1;
console.log(name); // 홍길동

// 객체 안에 다른 이름으로 변수명을 쓰고 싶으면
// let { name:n, age, gender} = p1;
// console.log(n); // 홍길동