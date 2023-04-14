// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
const myName = "john"
let season = 'winter'
let color = `red`; // backtick allows you to use template literal see n on line 17
let number = 20 // number datatype
let numberString = `20`
let todayIsCold = false
let chiliIsSpicy = true
let pizza = null
let food // no value -> undefined

let myFavColor = `my favorite color is ${color}` // template literal

let myFavColor2 = "My Favorite color is " + color // concatenation


let myFavNumber = "my favorite number is " + number 

let myFavNumber2 = `my favorite number is ${number}`

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguages = ['javascript', 'python','java','swift','C++']

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE
let index = 2
console.log(codingLanguages[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguages2.'
*/
//slice cuts of the last index of the array
//CODE HERE
let codingLanguages2 = codingLanguages.slice(0, codingLanguages.length)
//console.log(codingLanguages2)
/* 
    Add another coding language to the codingLanguages2 array.
*/

//CODE HERE
codingLanguages2.push('Rust','PHP')
codingLanguages2.unshift('SQL')

console.log(codingLanguages2);
// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop('cello') // .pop will get rid of the last item in the array
// console.log(instruments);
/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift()
// console.log(instruments);
/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array // .unshift is how you add to the front of the array
*/

//CODE HERE
instruments.unshift('guitar')
//console.log(instruments)
/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1 , "glockenspiel") //splice takes up to 3 arguments 1 is where it starts 2 is how many you want to replace 3 is the new value
// instruments[2] =`glockenspiel`


console.log(instruments)

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/
// if(condition){
//     code
// }
// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if(num % 2 === 1){
console.log(num);
} else {
    console.log(`${num} is not an even number.`);
}


// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if (score <= 10){
    console.log("Failed");
} else if(score > 10 && score < 41){
    console.log('the grade is C');
}

// score >= ? console.log('the grade is A'):
// score >= ? console.log('the grade is a B');

// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/
//for(let = i;i < 5; i++){

//}
// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0

for(let i = 0; i < price.length; i++){
//total += price[i];
totalPrice = totalPrice + price[i]
}

console.log(totalPrice)
/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let average = totalPrice / price.length
console.log(average);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for(let i = 0; i < colors.length; i++){
if(colors [i] === "red"){
    console.log("apple");
} else if (colors [i] === "green"){
    console.log("melon");
} else if (colors [i] === "yellow"){
    console.log("banana");
}
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

console.log('hello');