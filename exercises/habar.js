
// №1

/*1.  Сделать функцию которая приминаем 2 аргумента: строку и номер символа;
2.  Функция поднимает в верхний регистр элемент под номером символа:
3. Только строка начинается не с 0 индекса, а с 1 */


//  array[i] = [1 ,2 ,3] - обращение по индексу
//         i = 0   1  2  - индекс

// function sanek(string, number) {

//     if (number <= 0 || number > string.length || typeof string != "string") {
//         return "Uncorrect!"
//     } 
//     let arr = string.split("");
//     for (let i = 0; i < arr.length; i++) {
//     if (i === number - 1) {
//         arr[i] = arr[i].toUpperCase();
//     } 
//     } 
//     return arr.join("")
// }   
// console.log(sanek("sanek", 2));


// №2

// function modifySTR(str) // 1. Объявлю функцию с одним аргументом
// let arr = str.split('.')// 2. Разобью строку на массив предложений
// arr.map() // 3. Буду итерировать массив предложений, и на каждом шаге итерации
// arr.map() // 4. Удалю пробелы в начале и в конце предложения
// arr.map() // буду разбивать предложение на массив символов
// .tuUpperCase()// 5. подниму 0 символ в верхний регистр
// .join() // 6. соберу обратно массив символов в предложение
// .join() // 7. массив предложений соберу в строку, добавив '. '

// let str = "yarik molodez. u nego vse poluchitsya.on ne glupy.";

// function modifySTR(str) {
//   return str
//     .split(".")
//     .map((el) =>
//       el
//         .trim()
//         .split("")
//         .map((el2, index) => (index === 0 ? (el2 = el2.toUpperCase()) : el2))
//         .join("")
//     )
//     .join(". ");
// }

// console.log(modifySTR(str));


// Повтор пройденного материала 



// function f1(arr) {
//     return arr.map((el) =>  -1 * el);

// }

// console.log(f1[1, 2 ,3 , 4 , 5 , 6])


// массив из цифр сделать массив строк
// function Sanek(array) {
//     return array.map((element) => 
//     element = String(element)
//     )
// }
// console.log(Sanek([1, 2, 3, 4, 5]))

// функция принимающая смешанный массив , если это строки в верхний регистр , а 
// если это цифры умножаем на 2 

// function mix(arr) {
//     return arr.map((element) => {
//         if (typeof element === "string") {
//             element = element.toUpperCase() 
//             return element
//         } if (typeof element === "number") {
//             element = element * 2
//         } if (typeof element != "string" || typeof element != "number") {
//             return element
//         }
//         })
// }
// console.log(mix(['a', 2, 'e', 'y', 4]))


//Функция


// function mix(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "string") {
//             arr[i] = arr[i].toUpperCase()


//         } if (typeof arr[i] === "number") {
//             arr[i] = arr[i] * 2;

            
//         } if (typeof arr[i] != "string" || arr[i] != "number" ) {
//             arr[i] = arr[i];

//         }
//     }
//     return arr
// }
// console.log(mix(['a', 2, 'e', 'y', 4]))


// input: ['sasha', 3, 'misha', 4, 'dasha', 6]
// output: 'sasha***misha****dasha******'

function func1(arr) {
        return arr.reduce((acc, red, index)=>{
            if (typeof red === "string") {
                acc = acc + red
            } else {
                for ( let i = 0; i < red; i++) {
                    acc = acc + "*"
                }
            } 
            return acc
        }, '')
}

console.log(func1(['sasha', 3, 'misha', 4, 'dasha', 6]))