// 9.Write a program that reverses a string using a loop

let new_str = "Hareesh"
console.log("Before string reverse => ",new_str)

let rev_str = ""
for(let i of new_str){
    rev_str = i + rev_str
}
console.log("After string Reverse => ",rev_str)
