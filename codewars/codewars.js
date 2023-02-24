////требуется написать функцию которая при четном числе умножает на 8, при нечетном умножаеи на 9

// function simpleMultiplication (number) {
//     if (number%2) { //если есть остаток от деления значит число нечетное 
//         return number * 9;
//     } else {
//         return number * 8;
//     }
// } 
// console.log(simpleMultiplication(10))


// //функция умножающая количество учеников на количество бумаг, в случае если отрицательное количетсво выдает 0
// function papework(n, m) {
//     if (n < 0 || m < 0) {
//         return 0;
//     } else {
//         return n * m;
//     }

// }
// console.log (papework (8, 6))

// //фунцкия которая возвращает приветствие с именем:

// function greet(name) {
//     return `Hello, ${name} do you know that you are pidor?`
// }

// console.log(greet("Dima"));


//волк, уходи!



// function warnTheSheep(queue) {
//     for (let index = queue.length -1; index >= 0; index--) {
//         let element = queue[index]
//         if (element == "wolf" && index == queue.length -1) {
//             return "Pls go away and stop eating my sheep";
//         } 
        
//         if (element == "wolf" && index !== queue.length -1) {
//             let number = queue.length - index
//             return `Oi! Sheep number ${number}! You are about to be eaten by a wolf!`;
//         }
//     }
// }

// let arr = ["sheep",  "sheep", "sheep","wolf", "sheep" ]
// console.clear()

// console.log(warnTheSheep(arr));





