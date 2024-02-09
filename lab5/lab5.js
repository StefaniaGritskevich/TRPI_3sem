function makeCounter(){
    let currentCount = 1;
    return function(){
        return currentCount++;
    };
}
let counter = makeCounter();
alert(counter()); //1
alert(counter()); //2
alert(counter());//3

let counter2 = makeCounter();
alert(counter2());//1
alert("v2");

// let currentCount = 1;
// function makeCounter(){
//     return function(){
//         return currentCount++;
//     };
// }
// let counter1 = makeCounter();
// let counter12 = makeCounter();

// alert(counter1()); //1
// alert(counter1()); //2
// alert(counter12()); //3
// alert(counter12()); //4

console.log("/////////////////////////////////////////////////////////////////")
function funV(a, b, c){
    return a * b * c;
}

function curry(f){
    return function(a){
        return function(b){
            return function(c){
                return f(a, b, c);
            }
        }
    }
}
let curryFun = curry(funV);
let oneConst = curryFun(4);
console.log(oneConst(5)(6));
console.log(oneConst(7)(8));
//console.log(funV(4,5,6));


function* moveGenerator(startX, startY) {
    let x = startX;
    let y = startY;

    while (true) {
        let direction = yield { x, y }; // Возвращает текущие координаты

        switch (direction) {
            case 'left':
                x -= 10;
                break;
            case 'right':
                x += 10;
                break;
            case 'up':
                y += 10;
                break;
            case 'down':
                y -= 10;
                break;
            
        }
    }
}

const mover = moveGenerator(0, 0); // Начальные координаты объекта
mover.next(); // Инициализация генератора

function getUserDirection() {
    const direction = prompt("Введите направление (left, right, up, down):");
    if (['left', 'right', 'up', 'down'].includes(direction)) {
        const coords = mover.next(direction).value;
        console.log(`Новые координаты: x=${coords.x}, y=${coords.y}`);
        getUserDirection();
    } 
}

getUserDirection();


var xVar= 9;
for (let key in window) {
    console.log(key, window[key]);
}

window.xVar = 33;
console.log(xVar);