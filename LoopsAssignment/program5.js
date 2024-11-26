// 5.Write a program that uses a for in loop to loop through an object and prints the key-value pairs.

let new_obj = {
    "name" : "hareesh",
    "age" : 24,
    "designation" : "Full stack developer",
    "location" : "Bangalore"
}

for(let key in new_obj){
    console.log(`${key} - ${new_obj[key]}`)
}
