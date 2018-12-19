"use strict";

//p53.js
var arr = [10, 20, 30, 40];
var a = arr[0],
    b = arr[1],
    c = arr[2];

console.log(a, b, c); // 10, 20, 30

var p1 = { name: "홍길동", age: 20, gender: "M" };

var name = p1.name,
    age = p1.age,
    gender = p1.gender;

console.log(name); // 홍길동

// 객체 안에 다른 이름으로 변수명을 쓰고 싶으면
// let { name:n, age, gender} = p1;
// console.log(n); // 홍길동