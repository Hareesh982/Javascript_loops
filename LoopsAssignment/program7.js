// 7.Write a program to print numbers from 1 to 30. For multiples of 3, print "Move" instead of the number, for multiples of 5, print "Go", and for multiples of both 3 and 5, print "Keep Moving".

for(let i=1;i<=30;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i," => Keep moving")
    }
    else if (i%3 == 0){
        console.log(i," => Move")
    }
    else if(i%5 == 0){
        console.log(i," => Go")
    }
    else{
        console.log(i)
    }
}