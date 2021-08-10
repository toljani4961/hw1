// // function first() {
// //     setTimeout(function() {
// //         console.log(1);
// //     }, 1000);
    
// // }
// // function second() {
// //     console.log(2);
// // }
// // first();
// // second();

// function learnJS(lang, callback) {
//     console.log(`Я вчу: ${lang}`);
//     callback();
// }
// learnJS(prompt("Що ти вчиш?", ""),function() {
//     console.log('Я прошел урок!');
// });

// const str = prompt('', '');
// const products = str.split(',');
// console.log(products.join('; '));

const arr = [1, 34, 22, 12, 9, 55, 153];
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b) {
    return a - b;
}