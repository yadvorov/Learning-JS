
const myArr = [2, 3, 4, 5, 6] 
  total = 0;
  for (let i = 0; i <myArr.length; i++) {
    total += myArr[i];
  }
console.log(total)

function multyplyAll(arr) {
  let product = 1 ;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
      }
    }
    return product
}
let product =  multyplyAll([[1,2,3],[2,3,4],[5,6,]])
console.log(product)

//Функция рекурсии


// function summ(arr, n) {
//   if (n <=0) {
//     return 0;
    
//   } else { 
//     return summ(arr, n-1) + arr[n-1];
//   }
// }

// console.log(summ(3,2))


//Функция которая преобразовывает рандомное число в целое с заданным минимумом и максимумом

// function randomRange(myMax, myMin) {
//   return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
// }
// console.log(randomRange(15, 10))

//Функция которая преобразовывает строчку в цифры  (Use the parseInt Function)

// function convertToInteger(str) {

//   return parseInt(str);
//   }
  
//   convertToInteger("56");

//Функция которая принимает на вход число, возвращает пустой масив или обратный счет от этого числа 
 
function countdown(n){
  if (n < 1) {
  return [];
  } else { 
    const arr = countdown(n-1);
    arr.unshift(n);
    return arr;
  }
}

console.log(countdown(5));