let array = [1, [1, 2, [3 , 4] ], [2,4]];
function toone(array){
    return array.reduce((newArr, current) =>{
        return newArr.concat(Array.isArray(current)? toone(current): current);
    }, [])
}
console.log(toone(array));
///////////////////////////////////////////////////////////////////////

function toonesum(array){
    return array.reduce((newArr, current) =>{
        return newArr+(Array.isArray(current)? toonesum(current): current);
    }, 0)
}
console.log(toonesum(array));

/////////////////////////////////////////////////////////////////////////
function filterStudentsByAge(students) {
  const result = {};

  students.forEach(student => {
    if (student.age > 17) {
        result[student.groupId] = [];
      result[student.groupId].push(student);
    }});
  
    return result;
  }

const students = [
  { name: "Иван", age: 19, groupId: 1 },
  { name: "Мария", age: 20, groupId: 2 },
  { name: "Петр", age: 16, groupId: 1 },
  { name: "Анна", age: 18, groupId: 2 },
  { name: "Сергей", age: 21, groupId: 3 },
];
const newstud = filterStudentsByAge(students);
console.log(newstud);

  /////////////////////////////////////////////////////////////////////
  let character = 'ABCD';
let total1 = '';

for (let i = 0; i < character.length; i++) {
    total1 += character.charCodeAt(i);
}
console.log("total1 = " + total1);
let total2 = '';
total2 = total1.replace(/7/g, '1');
console.log("total2 = " + total2);
console.log("total1 - total2 = " + (total1 - total2));
///////////////////////////////////////////////////////////////////////

function extend(...objects) {
  return Object.assign({}, ...objects);
}

const result1 = extend({a: 1, b: 2}, {c: 3});
console.log(result1); 
const result2 = extend({a: 1, b: 2}, {c: 3}, {d: 4});
console.log(result2); 

const result3 = extend({s: 1, b: 2}, {a: 4, c: 3});
console.log(result3); 


////////////////////////////////////////////////////
function createTower(height) {
  const tower = [];
  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const stars = '*'.repeat(2 * i - 1);
    const row = spaces + stars + spaces;
    tower.push(row);
  }
  return tower;
}

const height = 12; 
const tower = createTower(height);

for (const row of tower) {
  console.log(row);
}
