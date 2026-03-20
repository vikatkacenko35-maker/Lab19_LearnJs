
// //Пример
// for (let i = 0; i < 5; i++) {
//     console.log(i);  
// }
// //Задание
// let sum = 0;
// for (let i = 0; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);  
//     }
//     sum += i;
// }
// //Пример

// let count = 0;

// while(count < 3){
//     console.log("Count:", count);
//     count++;
// }

// //Задание

// let number = 5;
// while (number>0){
//     console.log(number);
//     number--;
// }
// //Пример 
// let doValue = 0;
// do{
//     console.log("Valur:", doValue);
//     doValue++;
// }while(doValue<3);

// //break if() {break}

// for (let index = 1; index <11; index++) {
    
//     if (index==5){
//         continue;
//     }
//     if (index == 8) {
//         break;
//     }
//     console.log(index);
// }

// for (let i = 1; i <=3; i++){
//     for (let j = 1; j <=3; j++){
//         console.log(i, j);
//     }
// }

// for (let i = 1; i <=4; i++){
//     for (let j = 1; j <=1; j++){
//         console.log("*".repeat(i));
//     }
// }

// function sum(a, b){
//     return a + b;
// }
// console.log(sum(3,5));

// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(3,4));

// function printinfo(namr, age){
//     console.log("Имя:", namr);
//     console.log("Влзварст:", age);
// }

function greet(name = "Гость"){
     console.log("Hi, " + name);
}
greet();
// greet("ананстасия");

// function calculateDiscount(cost, percent = 10){
//     return cost += cost * (percent / 100)
// }

// //Пример замыканий (closure):

// function ex1(){
//     let c = 0;
//     return function(){
//         c++; //функция помнит с
//         return c;
//     };
// }
// const c = ex1;
// console.log(c());//1
// console.log(c());//2
// console.log(c());//3

// //Стрелочные функции (Arrow Functions)

// const sumf2 = (a,b) => a+b;
// const sayHi = () => console.log("Hiii!!");
// //Один параметр — скобки необязательны:
// //Несколько параметров — скобки обязательны:
// //Нет параметров — пустые скобки
// //Одна строка — return неявный:
// const sq = x => x*x; // return automatic

//массивы
let ex3 = [1,2,3,4,5];
console.log(ex3);
let colors = ["Red", "Blue", "Green"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "Black";
for (i in colors){
    console.log(colors[i]);
}
//Добавление в конец (push)

//Удаление из конца (pop)
 let  students =[];
 students.push("fgg");
 students.push("gh");
 students.push("ghghj");
 students.pop();
 for (i in students){
    console.log(students[i]);
}


//Аналог foreach в C#

for (let value of students){
    console.log(value);
}

//Метод 1: indexOf() — возвращает индекс
//Если элемент не найден → возвращает -1

//Метод 2: includes() — возвращает true/false

let city = ["a", "b", "f"];
console.log(city.indexOf("f"))

//Создание объекта (object literal)

let user = {
    name:"Bjujd",
    age: 90,
    sis: false,
};
console.log(user)
console.log(user.age);
console.log(user["name"]);

let book= {
    title:"dffd",
    author:"pushkin",
    year:1890,
};
console.log(book.title);
console.log(book.author);
console.log(book.year);
book.year = 1989;
console.log(book.year);
// Добавление и удаление свойств
delete book.author;
//user.greet();

let car = {
    brand: "roytrts",
    year: 844,
    getInfo: function(){
        console.log(this.brand, this.year);
    },
};
function getInfo(df, dfd){
    console.log("Brand: ", df);
    console.log("Year: ", dfd);

}
car.getInfo();

for (let y in car){
    console.log(y + ":" + car[y]);
}

let product = {
    stoimost: 52,
    ves: 67,
    god: 777,
};
for (let yh in product){
    console.log(yh + ":" + product[yh]);
}
//Финальный коммит (после всех шагов)