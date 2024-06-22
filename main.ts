import chalk from "chalk";


// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".

let fruit:string[] =["apple", "banana", "mango", "orange"];

console.log(chalk.red(fruit));


// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.


let num = [10, 20, 30, 40];
console.log("number :"+ num);

// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit. 

let fruitsList:string[] =["apple", "banana", "mango", "orange"];
let thirdFruit = fruitsList[2];
console.log(thirdFruit);


// Question 4
// Change the second element of the numbers array to 25.

let numbers = [10, 20, 30, 40];
numbers[1]=25;
console.log(numbers);

// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.

let fru:string[] =["apple", "banana", "mango", "orange"];
fru.push('grape');
console.log(fru);


// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.

let fr:string[] =["apple", "banana", "mango", "orange"];
console.log(fr);
let lastFruit = fr.pop();
console.log(chalk.red(`\n lastFruit is: ${lastFruit}\n`));
console.log(chalk.greenBright(`\n Updated fruits array fruits is: ${fr} \n`));


// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.

let phal:string[] =["apple", "banana", "mango", "orange"];
console.log(phal);

let firstFruit = phal.shift();
console.log(firstFruit);
console.log(`Updated array is : ${phal}`);


// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.

let fruitsArr:string[] =["apple", "banana", "mango", "orange"];
console.log(fruitsArr);
fruitsArr.unshift('kiwi');
console.log(`Updated array: ${fruitsArr}`);



// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.

let fruitsChaat:string[] =["apple", "banana", "mango", "orange"];
console.log(fruitsChaat);
fruitsChaat.splice(1,2);
console.log(`Updated your array: ${fruitsChaat}`);




// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.

let fruitsName:string[] =["apple", "banana", "mango", "orange"];
console.log(fruitsName);
fruitsName.splice(2, 0, "pineapple", "pear");
console.log(fruitsName);


// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.

let fruitsData:string[] =["apple", "banana", "mango", "orange"];

let citrusFruits = fruitsData.slice(0,2);

console.log(citrusFruits);

// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.

let fruits:string[] =["apple", "banana", "mango", "orange"];
let lastTwoFruits = fruits.slice(-2);
console.log('Last two fruits array :'+ lastTwoFruits);











