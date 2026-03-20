
//Пример
for (let i = 0; i < 5; i++) {
    console.log(i);  
}
//Задание
let sum = 0;
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i);  
    }
    sum += i;
}
//Пример

let count = 0;

while(count < 3){
    console.log("Count:", count);
    count++;
}

//Задание

let number = 5;
while (number>0){
    console.log(number);
    number--;
}
//Пример 
let doValue = 0;
do{
    console.log("Valur:", doValue);
    doValue++;
}while(doValue<3);

//break if() {break}

for (let index = 1; index <11; index++) {
    
    if (index==5){
        continue;
    }
    if (index == 8) {
        break;
    }
    console.log(index);
}

for (let i = 1; i <=3; i++){
    for (let j = 1; j <=3; j++){
        console.log(i, j);
    }
}

for (let i = 1; i <=4; i++){
    for (let j = 1; j <=1; j++){
        console.log("*".repeat(i));
    }
}

function sum(a, b){
    return a + b;
}
console.log(sum(3,5));

function multiply(a, b){
    return a * b;
}
console.log(multiply(3,4));

function printinfo(namr, age){
    console.log("Имя:", namr);
    console.log("Влзварст:", age);
}

function greet(name = "Гость"){
    console.log("Hi, " + name);
}
greet();
greet("ананстасия");

function calculateDiscount(cost, percent = 10){
    return cost += cost * (percent / 100)
}

//Пример замыканий (closure):

function ex1(){
    let c = 0;
    return function(){
        c++; //функция помнит с
        return c;
    };
}
const c = ex1;
console.log(c());//1
console.log(c());//2
console.log(c());//3

//Стрелочные функции (Arrow Functions)

const sumf2 = (a,b) => a+b;
const sayHi = () => console.log("Hiii!!");
//Один параметр — скобки необязательны:
//Несколько параметров — скобки обязательны:
//Нет параметров — пустые скобки
//Одна строка — return неявный:
const sq = x => x*x; // return automatic