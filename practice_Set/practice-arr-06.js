let marks = [89, 90, 99, 95, 91, 96, 50, 78, 58];
let NewMarks = marks.filter((val) => {
    return val > 90;
});
console.log(`scored 90+ marks of student list is here ${NewMarks} \n Marks of all students : ${marks}`);

let num = prompt("Enter a number : ");
num = Number.parseInt(num);

let arr = [];
for (let i = 1; i <= num; i++) {
    arr[i - 1] = i;
}
// let reduceArr = arr.reduce((pre, cur) => {
//     return pre + cur;
// });
// console.log(arr);

// console.log(`sum of all number given as input array: ${reduceArr}`);
let reduceArr = arr.reduce((pre, cur) => {
    return pre * cur;
});
console.log(arr);

console.log(`product of all number given as input array: ${reduceArr}`);