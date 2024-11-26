// 2.Write a program that asks the user to enter a number and keeps asking for the number until the user enters a number greater than 100.



let new_input
while(true){
    new_input = window.prompt("Enter the number greater than 100")
    if (new_input < 100){
        continue
    }
    else{
        break
    }
}
