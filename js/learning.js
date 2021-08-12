// // // function first() {
// // //     setTimeout(function() {
// // //         console.log(1);
// // //     }, 1000);
    
// // // }
// // // function second() {
// // //     console.log(2);
// // // }
// // // first();
// // // second();

// // function learnJS(lang, callback) {
// //     console.log(`Я вчу: ${lang}`);
// //     callback();
// // }
// // learnJS(prompt("Що ти вчиш?", ""),function() {
// //     console.log('Я прошел урок!');
// // });

// // const str = prompt('', '');
// // const products = str.split(',');
// // console.log(products.join('; '));

// // const arr = [1, 34, 22, 12, 9, 55, 153];
// // arr.sort(compareNum);
// // console.log(arr);
// // function compareNum(a, b) {
// //     return a - b;
// // }

// // const obj = {
// //     a: 5,
// //     b: 3
// // };
// // const copy = obj; // link of obj 
// // copy.a = 999;
// // console.log(copy);
// // console.log(obj);

// function doingCopy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 1,
//     b: 54,
//     c: 8,
//     d: {
//         e: 84,
//         f: 4
//     }
// };
// const newNumbers = doingCopy(numbers);
// newNumbers.a = 13333;
// // console.log(newNumbers);
// // console.log(numbers);

// let add = {
//     v: 3323,
//     n: 3222
// };
// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.v = 0.222;
// console.log(add);
// console.log(clone);


//  const oldArray = ['a', 'b', 'c'];
//  const newArray = oldArray.slice();
//  oldArray[4] = 'asdfasdfasdf';
//  console.log(oldArray);
//  console.log(newArray);
 
const soldier = {
    armor: 311,
    helth: 100,
    sayHello: function() {
        console.log("hello");
    }
};
const John = Object.create(soldier);
// const John = {
//     helth: 100
// };
// John.__proto__ = soldier;
// console.log(John.helth);
John.sayHello();
