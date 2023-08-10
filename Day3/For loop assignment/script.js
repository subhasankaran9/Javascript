
/* Challenge 1: Multiples of Three */

console.log("Challenge 1: Multiple of three");
for (let i = 1; i <= 30; i++) {
    if(i % 3 == 0){
console.log("Fizz");
    }
    else{
        console.log(i);
    }

}

/*Challenge 2: Looping through Arrays and Modifying Elements*/

console.log("Challenge 2: Looping through Arrays and Modifying Elements")
const numberList=[1,2,3,4,5,6,7,8,9,10];
console.log("numberList");
for (let i=0; i < numberList.length; i++){
    numberList[i]*=5;
}
console.log(numberList);


/* Challenge 3: Looping through String Arrays*/

console.log("Challenge 3: Looping through String Arrays")
const wordArray=["cat", "window", "bottle", "car", "JavaScript"];
console.log("wordAlert")
for (let i=0; i < wordArray.length; i++){
if(wordArray[i].length > 4){
    console.log("Long word alert!");
}
    else{
        console.log(wordArray[i]);
    }
}




/* Challenge 4: Updating TextContent of a Paragraph*/

console.log("Challenge 4: Updating TextContent of a Paragraph")
let myParagraphUser = document.getElementById("myParagraph");
for(let i=1; i <= 5; i++) {
 myParagraphUser.textContent += i;
}

 /*  Challenge 5: Odd Numbers with For-Loops and Conditionals */

 console.log("Challenge 5: Odd Numbers with For-Loops and Conditionals")
 for(let i=1; i <= 20; i++){
    if (i % 2 == 1){

    }
        console.log(i);
    }
    

