// 8.Write a program that finds the largest number in an array using a for of loop.

let new_arr = [4,3,5,2,1,9,10,5,4,7]

let max = new_arr[0];

for (let i of new_arr) {
    if (i > max) {
        max = i;
    }
}
console.log(max)
