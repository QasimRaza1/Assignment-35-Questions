// Question 1 
console.log("Hello world");
// Question 2
let temp = 25;
if (temp < 20) {
    console.log("its cold", temp);
}
else {
    console.log("its not cold");
}
// Question 3
let Num = 10;
console.log(Num = Num - 3);
// Question 4
let firstName = "Qasim";
let lastName = "Raza";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
// Question 5
let num1 = 5;
let num2 = 3;
if (num1 > num2) {
    console.log("yes");
}
else {
    console.log("No");
}
// Question 6
function calculateArea(radius) {
    const area = Math.PI * radius ** 2;
    return area;
}
const radius = 10;
const area = calculateArea(radius);
console.log("The area of the circle with radius", radius, "is:", area);
// Question 7
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// Question 8
let temperatures = [23, 13, 29, 21, 19];
let highest = temperatures[0];
for (let temp of temperatures) {
    if (temp > highest)
        highest = temp;
}
console.log(highest);
// Question 9
let age = 20;
if (age >= 18) {
    console.log("You are Adult", age);
}
else {
    console.log("You are under age");
}
// Question 10 
const numbers = [1, -2, 3, -4, 5];
const positiveNumber = countPositiveNumbers(numbers);
console.log("The count of positive numbers:", positiveNumber);
function countPositiveNumbers(numbers) {
    let count = 0;
    for (const num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
// question 11
function findWordsStartingWithA(wordsList) {
    let aWords = [];
    // Go through each word in the list
    for (let word of wordsList) {
        // If the word starts with 'a', add it to our list
        if (word.toLowerCase().startsWith('a')) {
            aWords.push(word);
        }
    }
    return aWords;
}
let words = ['apple', 'banana', 'orange', 'avocado', 'pear', 'kiwi'];
let result = findWordsStartingWithA(words);
console.log(result); // Output: ['apple', 'avocado']
// Question 12
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[fruits.length - 2]);
// Question 13
function squareNumbers(numbers) {
    return numbers.map((number) => number * number);
}
const Numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// Quetion 14
function reverseArray(arr) {
    // Create a new empty array to store the reversed elements
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        // Push each element from the original array to the new reversed array
        reversedArr.push(arr[i]);
    }
    // Log the reversed array
    console.log(reversedArr);
}
const myArray = [1, 2, 3, 4, 5];
reverseArray(myArray); // Output: [5, 4, 3, 2, 1] (logged to the console)
// Question 15
function countScoreExtremes(scores) {
    // Find the minimum and maximum scores
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    // Initialize counters for exceeding and falling below
    let exceededCount = 0;
    let fellBelowCount = 0;
    // Loop through the scores to count extremes
    for (const score of scores) {
        if (score > maxScore) {
            exceededCount++;
        }
        else if (score < minScore) {
            fellBelowCount++;
        }
    }
    // Log the results
    console.log(`Number of times the score exceeded the maximum (${maxScore}): ${exceededCount}`);
    console.log(`Number of times the score fell below the minimum (${minScore}): ${fellBelowCount}`);
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
countScoreExtremes(scores);
// Question 16
function removeFalseyValues(arr) {
    // Use filter method to create a new array with only truthy values
    return arr.filter((element) => !!element);
}
const myArray1 = [false, null, 0, "", undefined, NaN, 1, "hello", true];
const filteredArray = removeFalseyValues(myArray1);
console.log(filteredArray); // Output: [1, "hello", true]
// Question 17
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Concatenate arrays using spread operator
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
//  Quetion 18
function sumOfElements(arr, even_or_odd) {
    if (even_or_odd !== "even" && even_or_odd !== "odd") {
        throw new Error("even_or_odd must be either 'even' or 'odd'");
    }
    const sum = arr.reduce((acc, curr) => {
        // Check if current element is even using modulo (%)
        if (even_or_odd === "even" && curr % 2 === 0) {
            return acc + curr;
        }
        else if (even_or_odd === "odd" && curr % 2 !== 0) {
            return acc + curr;
        }
        else {
            return acc;
        }
    }, 0);
    return sum;
}
const myArr = [1, 2, 3, 4, 5];
const evenSum = sumOfElements(myArr, "even");
const oddSum = sumOfElements(myArr, "odd");
console.log("Sum of even elements:", evenSum); // Output: 6
console.log("Sum of odd elements:", oddSum); // Output: 9
// Question 19
function findElementIndex(arr, element) {
    // Use for loop for basic element search
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; // Return index if element found
        }
    }
    return -1; // Return -1 if element not found
}
const myArr2 = [1, 2, 3, 4, 5];
const elementToFind = 3;
const elementIndex = findElementIndex(myArr2, elementToFind);
console.log("Index of", elementToFind, ":", elementIndex); // Output: Index of 3: 2
// Question 20
function findSmallest(numbers) {
    return Math.min(...numbers);
}
const numbers1 = [5, 2, 8, 1, 9];
const smallest = findSmallest(numbers1);
console.log("Smallest number:", smallest); // Output: Smallest number: 1
// Question 21
function calculateProduct(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
const numbers3 = [2, 4, 5];
const product = calculateProduct(numbers3);
console.log("Product:", product); // Output: Product: 40
// Question 22
function filterByLength(strings, n) {
    // Use filter method to create a new array with strings longer than n characters
    return strings.filter((string) => string.length > n);
}
const strings = ["apple", "banana", "cherry", "mango", "kiwi"];
const n = 5;
const filteredStrings = filterByLength(strings, n);
console.log(filteredStrings); // Output: ["banana", "cherry"]
// Questio 23
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = [];
    for (const element of arr) {
        // Check if element is already in the Set
        if (seen.has(element)) {
            duplicates.push(element);
        }
        else {
            seen.add(element);
        }
    }
    // Log duplicates if any
    if (duplicates.length > 0) {
        console.log("Duplicate elements:", duplicates);
    }
    else {
        console.log("No duplicates found in the array.");
    }
}
const myArr3 = [1, 2, 3, 2, 4, 5, 1, 6];
findDuplicates(myArr3);
// Output: Duplicate elements: 1, 2
// Question 24
function incrementAll(numbers) {
    return numbers.map((num) => num + 1);
}
const myArr4 = [1, 2, 3, 4, 5];
const incrementedArr = incrementAll(myArr4);
console.log(myArr4); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
console.log(incrementedArr); // Output: [2, 3, 4, 5, 6]
// Question 25
function countOccurrences(elements, target) {
    return elements.filter((e) => e === target).length;
}
const myArr5 = [1, 2, 2, 3, 1, 4, 2];
const elementToCount = 2;
const occurrences = countOccurrences(myArr5, elementToCount);
console.log("Number of occurrences of", elementToCount, ":", occurrences); // Output: Number of occurrences of 2: 3
// Question 26
function isSorted(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i - 1] > numbers[i])
            return false;
    }
    return true;
}
const sortedArr = [1, 2, 3, 4, 5];
const unsortedArr = [5, 2, 8, 1, 3];
console.log("Sorted array:", isSorted(sortedArr)); // Output: Sorted array: true
console.log("Unsorted array:", isSorted(unsortedArr)); // Output: Unsorted array: false
// Question 27
function formatNames(names) {
    if (names.length < 2)
        return names.join("");
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}
const names1 = ["Qasim", "Aishhh", "Sabeen"];
const names2 = ["Maham"];
const names3 = [];
const formattedNames1 = formatNames(names1);
const formattedNames2 = formatNames(names2);
const formattedNames3 = formatNames(names3);
console.log(formattedNames1); // Output: Qasim, Aishhh and Sabeen
console.log(formattedNames2); // Output: Maham
console.log(formattedNames3); // Output: 
// Question 28
function fahrenheitToCelsius(fahrenheitTemps) {
    for (const fahrenheit of fahrenheitTemps) {
        // Conversion formula: Celsius = (Fahrenheit - 32) * 5 / 9
        const celsius = (fahrenheit - 32) * 5 / 9;
        console.log(fahrenheit, "°F is equal to", celsius.toFixed(2), "°C");
    }
}
const fahrenheitTemps = [32, 77, 100];
fahrenheitToCelsius(fahrenheitTemps);
// Question 29
function minMaxAverage(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((sum, current) => sum + current, 0) / numbers.length;
    return { min, max, average };
}
const numbers5 = [10, 25, 18, 7];
const stats = minMaxAverage(numbers5);
console.log(stats); // Output: {min: 7, max: 25, average: 15}
// Question 30
function swapElements(elements, index1, index2) {
    let temp = elements[index1];
    elements[index1] = elements[index2];
    elements[index2] = temp;
    return elements;
}
const numbers6 = [1, 2, 3, 4, 5];
const swappedArr = swapElements(numbers6, 1, 3);
console.log(swappedArr); // Output: [1, 4, 3, 2, 5] (original array is modified)
// Question 31
function countCharacter(str, char) {
    return str.split("").filter((c) => c === char).length;
}
const str = "Mississippi";
const char = "s";
const charCount = countCharacter(str, char);
console.log("The character '" + char + "' appears " + charCount + " times in '" + str + "'");
// Output: The character 's' appears 4 times in 'Mississippi'
// Question 32
// Define an array of objects to represent tasks
const todoList = [
    { task: "Buy groceries", completed: false },
    { task: "Wash dishes", completed: true },
    { task: "Clean the house", completed: false },
    { task: "Finish homework", completed: true },
];
// Function to log incomplete tasks
function logIncompleteTasks(list) {
    for (const item of list) {
        if (!item.completed) { // Use !item.completed for checking if not completed
            console.log("- " + item.task);
        }
    }
}
// Log incomplete tasks from the to-do list
console.log("Incomplete Tasks:");
logIncompleteTasks(todoList);
// Output: Incomplete Tasks:
// - Buy groceries
// - Clean the house
// Question 33
function sortIntegers(arr) {
    // Use the built-in sort() method with a comparison function
    return arr.sort((a, b) => a - b);
}
// Example usage
const unsort = [5, 2, 8, 1, 3];
const unsortedNumbers = [5, 2, 8, 1, 3];
const sortedNumbers = sortIntegers(unsortedNumbers);
console.log("Unsorted:", unsort);
console.log("Sorted:", sortedNumbers);
// Output:
// Unsorted: [5, 2, 8, 1, 3]
// Sorted: [1, 2, 3, 5, 8]
function logArrayReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// Example usage
const numbers7 = [1, 2, 3, 4, 5];
const strings2 = ["apple", "banana", "cherry"];
logArrayReverse(numbers7);
logArrayReverse(strings2);
// Output:
// 5
// 4
// 3
// 2
// 1
// cherry
// banana
// apple
// Question 35
// #!/usr/bin/env node
import inquirer from "inquirer";
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select Operation",
        choices: ["+", "-", "*", "/"], // corrected 'choices' spelling
    },
])
    .then((answers) => {
    const { num1, num2, operation } = answers;
    if (operation === "+") {
        const result = num1 + num2;
        console.log("Sum:", result);
    }
    else if (operation === "-") {
        const result = num1 - num2;
        console.log("Subtraction:", result);
    }
    else if (operation === "*") {
        const result = num1 * num2;
        console.log("Multiplication:", result);
    }
    else if (operation === "/") {
        const result = num1 / num2;
        console.log("Division:", result);
    }
    else {
        console.log("Invalid operation selected");
    }
});
