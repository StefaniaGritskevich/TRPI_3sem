/*-------------------------------------------------------------------------------------------- */
let a = 5; //number
let name = "Name"; //string
let i = 0; //number
let double = 0.23; //number
let result = 1/0; //number
let answer = true; //boolean
let no = null; //null

//console.log(typeof no);
/**-------------------------------------------------------------------------------------------- */
let squareSide = 5
let heightA = 45
let widthA = 21

let squareInHeight = Math.floor(heightA / squareSide)
let squareInWidth = Math.floor(widthA / squareSide)
let allSquares = squareInHeight * squareInWidth;
console.log(`Количество квадратов в четырёхугольнике 45х21 = ${allSquares}`
)
/**-------------------------------------------------------------------------------------------- */
let i1 = 2
let a_ = ++i1
let b_ = i1++
console.log(a_ === b_)
console.log(i1);
/**-------------------------------------------------------------------------------------------- */
console.log(`----------------------`)
console.log("Котик" == "котик")
console.log("Котик" == "китик")
console.log("Кот" == "Котик")
console.log("Привет" == "Пока")
console.log(73 == "53")
console.log(false == 0)
console.log(54 == true)
console.log(123 == false)
console.log(true == "3")
console.log(3 == "5мм")
console.log(8 == "-2")
console.log(34 == "34")
console.log(null == undefined)
/**-------------------------------------------------------------------------------------------- */


const userInput = prompt("Пожалуйста, введите ваше ФИО:");
const lowercaseUserInput = userInput ? userInput.toLowerCase() : ''; // Приводим введенную строку к нижнему регистру
const teacherFullName = "Кудлацкая Марина Фёдоровна".toLowerCase(); // Приводим ФИО  к нижнему регистру

if (
    lowercaseUserInput === teacherFullName || // Полное ФИО
    lowercaseUserInput === "марина фёдоровна" || // Только имя и отчество
    lowercaseUserInput === "марина" // Только имя
) {
    alert("Введенные вами данные верные.");
} else {
    alert("Введенные вами данные неверные.");
}




/**-------------------------------------------------------------------------------------------- */
let math, russ, english; 
alert("Введите одну из цифр: 1- сдал, 0 - не сдал"); 
math = prompt("математика: "); 
russ = prompt("русский: "); 
english = prompt("английский: "); 
if(math == 1 && russ == 1 && english == 1) 
{ 
    alert("Вы переведены на следующий курс"); 
} 
else if(math == 0 && russ == 0 && english == 0) 
{ 
    alert("Вы отчислены!)"); 
} 
else if(math == 0 || russ == 0 || english == 0) 
{ 
    alert("У вас имеются долги по экзаменам, их нужно закрыть"); 
} 
else 
{ 
    alert("Условие не соблюдено") 
}
/**-------------------------------------------------------------------------------------------- */

console.log(true + true)
console.log(0 + "5")
console.log(8/Infinity)
console.log(9 * "\n9")
console.log(null - 1)
console.log("5" - 2)
console.log("5px" - 3)
console.log(true - 3)
console.log(7 || 0)

/**-------------------------------------------------------------------------------------------- */

const res = [];

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        res.push(i + 2);
    } else {

        res.push(`${i}мм`);
    }
}
console.log(res);

/**-------------------------------------------------------------------------------------------- */
const daysOfWeek = {
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс",
  };
  
  const dayNumber = parseInt(prompt("Введите номер дня недели (от 1 до 7):"));
  
  if (dayNumber >= 1 && dayNumber <= 7) {
      alert(`День недели с номером ${dayNumber} - это ${daysOfWeek[dayNumber]}`);
  } else {
      alert("Введенный номер дня недели недопустим.");
  }
  
// Определение функции с тремя параметрами
function combineParameters(param1 = "По умолчанию", param2, param3) {
    // Скомбинируем параметры в строку
    const result = `${param1}, ${param2}, ${param3}`;
    return result;
}

// Запрос значений у пользователя для второго и третьего параметров
const userInputParam2 = prompt("Введите значение для второго параметра:");
const userInputParam3 = prompt("Введите значение для третьего параметра:");

// Вызов функции с передачей всех трех параметров
const combinedString = combineParameters(undefined, userInputParam2, userInputParam3);

// Вывод результата
console.log(combinedString);

//function decloration 
function params(a, b) {
    if (a === b) {
        return 4 * a; // Периметр квадрата
    } else {
        return a * b; // Площадь прямоугольника
    }
}

//functiom expression
const paramsE = function(a, b) {
    if (a === b) {
      return 4 * a; // Периметр квадрата
    } else {
      return a * b; // Площадь прямоугольника
    }
  };
  
  const paramsArr = (a, b) => {
    if (a === b) {
      return 4 * a; // Периметр квадрата
    } else {
      return a * b; // Площадь прямоугольника
    }
  };
  
console.log(params(5, 5)); // Вызываем функцию для квадрата
console.log(params(4, 6)); // Вызываем функцию для прямоугольника
