function basicOperation (operatino, value1, value2){ 
    if(operatino == '+') 
        return value1 + value2; 
    else if(operatino == '-') 
        return value1 - value2; 
    else if(operatino == '/') 
        return value1 * value2; 
    else if(operatino == '*') 
        return value1 / value2; 
    else 
        return null; 
} 
 
console.log(basicOperation('+', 7, 25)); 
console.log(basicOperation('-', 109, 8)); 
console.log(basicOperation('*', 56, 5)); 
console.log(basicOperation('/', 70, 5)); 

 ///////////////////////////////////////////////////

function summCubeN(n){ 
    let a = 0; 
    for(let i = 1; i <= n; i ++){ 
        a = a + i*i*i; 
    } 
    return a; 
} 
 
console.log(summCubeN(5));
//////////////////////////////////////////////////////// 
 
function averageArr(arr) {
    let sum = 0;
    arr.forEach(function(el) {
        sum += el;
    });
    return sum / arr.length;
}

let arr = [1, 2, 3, 2];
console.log(averageArr(arr));
 
////////////////////////////////////////////////////////
 
function reversLatinitsa(str){ 
    let Str = ''; 
    for(let i = str.length - 1; i >= 0; i --){ 
        if(str[i] >= 'A' && str[i] <= 'z') 
        Str += str[i]; 
    } 
    return Str 
} 
 
console.log(reversLatinitsa("qwert56УКРБ")); 
 
/////////////////////////////////////////

function strRepeat(n, str){ 
    let newString = ''; 
    while(n > 0){ 
        newString += str; 
        n--; 
    } 
    return newString; 
} 
console.log(strRepeat(4, "i_love_js_")); 
///////////////////////////////////////////////
 
function onlystr2(arr1, arr2){
    let arr3 = [];
    let uniq;
    for(let i = 0; i < arr1.length; i++){
        uniq = true;
        for(let j = 0; j < arr2. length; j++ ){
            if(arr1[i] == arr2[j]){
                uniq = false;
                break;
            }
        }
    
    if(uniq == true){
        arr3.push(arr1[i]);
    }
}
    return arr3;
}

 
let arrr1 = ["neuniq1", "uniq1", "neuniq2", "uniq2"]; 
let arrr2 = ["neuniq1", "neuniq2", "rtyhujk", "dfghjk"]; 
 
console.log(onlystr2(arrr1, arrr2));

