const productList = new Set();

function addProduct(product) {
  productList.add(product);
}

function removeProduct(product) {
  productList.delete(product);
}
function hasProduct(product) {
  return productList.has(product);
}

function getProductCount(product) {
  let count = 0;
  for (const item of productList) {
    if (item === product) {
      count++;
    }
  }
  return count;
}

addProduct("Микроволновка");
addProduct("Фен");
addProduct("Утюг");
console.log(productList);

console.log("Микроволновка содержится в каталоге?: " + hasProduct("Микроволновка"));
console.log("Количество товара <<Микроволновка>> : " + getProductCount("Микроволновка")); 


removeProduct("Микроволновка");
console.log(productList);
console.log("Микроволновка содержится в каталоге?: " + hasProduct("Микроволновка"));
console.log("Количество товара <<Микроволновка>> : " + getProductCount("Микроволновка")); 


///////////////////////////////////////////////////////////////

const studentSet = new Set();

function addStudent(student) {
  studentSet.add(student);
}

function otchislyator(studentId) {
  studentSet.forEach((student) => {
    if (student.studentId === studentId) {
      studentSet.delete(student);
    }
  });
}

function filterStudentsByGroup(group) {
  const filteredStudents = new Set();
  studentSet.forEach((student) => {
    if (student.group === group) {
      filteredStudents.add(student);
    }
  });
  return filteredStudents;
}

function sortStudentsByStudentId() {
  const sortedStudents = Array.from(studentSet);
  sortedStudents.sort((a, b) => a.studentId - b.studentId);
  return sortedStudents;
}

const student1 = { studentId: 120939, group: 5, name: "John Doe" };
const student2 = { studentId: 456, group: 4, name: "Jane Smith" };
const student3 = { studentId: 789, group: 5, name: "Bob Johnson" };
const student4 = { studentId: 4308, group: 3, name: "Bob Johnson" };
const student5 = { studentId: 12342, group: 9, name: "Bob Johnson" };
const student6 = { studentId: 98087, group: 5, name: "Bob Johnson" };

addStudent(student1);
addStudent(student2);
addStudent(student3);
addStudent(student4);
addStudent(student5);
addStudent(student6);
console.log(studentSet);
console.log("Количество студентов: " + studentSet.size);

otchislyator(456);
console.log("Количество студентов после отчисления: " + studentSet.size);

const groupAStudents = filterStudentsByGroup(5);
console.log("Количество студtynjd в 5 группе: " + groupAStudents.size);

const sortedStudents = sortStudentsByStudentId();
console.log(sortedStudents);

////////////////////////////////////////////////////////////////////////////////////////

const productStore = new Map();

function addProductmap(id, name, quantity, price) {
  if (!productStore.has(id)) {
    productStore.set(id, { name, quantity, price });
  } else {
    // Если товар с таким id уже существует, можно обновить информацию о нем
    const existingProduct = productStore.get(id);
    existingProduct.name = name;
    existingProduct.quantity = quantity;
    existingProduct.price = price;
  }
}

function deleteProductById(id) {
  productStore.delete(id);
}

function removeProductsByName(name) {
  for (const [id, product] of productStore) {
    if (product.name === name) {
      productStore.delete(id);
    }
  }
}

function updateQuantity(id, newQuantity) {
  if (productStore.has(id)) {
    productStore.get(id).quantity = newQuantity;
  }
}

function updatePrice(id, newPrice) {
  if (productStore.has(id)) {
    productStore.get(id).price = newPrice;
  }
}
function cuntItems() {
  return productStore.size;
}

function calculateTotalPrice() {
  let total = 0;
  for (const product of productStore.values()) {
    total += product.quantity * product.price;
  }
  return total;
}

addProductmap(1, "Утюг", 5, 10);
addProductmap(2, "Руки", 3, 15);
addProductmap(3, "Желатин", 2, 12);
console.log(productStore);
console.log("Количество товаров в Map:  " + cuntItems());
console.log(calculateTotalPrice()); 

updatePrice(3,20);
console.log(productStore);
console.log(calculateTotalPrice()); 
deleteProductById(2);
console.log("Количество товаров в Map после удаления:  " + cuntItems());

removeProductsByName("Утюг");
console.log("Количество товаров в Map после удаления утюга;( " + cuntItems());


// задание 4
console.log("Задание 4");
let cache = new WeakMap();

function expensiveFunction(input) {
  if (cache.has(input)) {
    console.log("Взято из кэша");
    return cache.get(input);
  }

  const result = input.key * 2;
  cache.set(input, result);

  return result;
}

const input1 = {key: 5};
const input2 = {key: 10};

console.log(expensiveFunction(input1)); 
console.log(expensiveFunction(input1)); 

console.log(expensiveFunction(input2)); 
console.log(expensiveFunction(input2));