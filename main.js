
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