console.log("test")

// function reverseString (stringInput) {
//     // Base case: stop recursion when the string is empty
//     if (stringInput == "") {
//         return ""; 
//     }

//     // Recursive case: Reverse the rest of the string and add the first character to the end. 
//     return reverseString(stringInput.substring(1)) + stringInput.charAt(0); 
// }

// console.log(reverseString("cat"))


// function isPalindrome(string) {
//     // Base case: stop condition
//     if (string.length == 0 || string.length == 1) {
//         return true;
//     }

//     // Compare first and last characters
//     if (string.charAt(0) == string.charAt(string.length - 1)) {
//         // Recursive call to check the substring excluding the first and last characters
//         return isPalindrome(string.substring(1, string.length - 1));
//     }

//     // If characters don't match, it's not a palindrome
//     return false;
// }

// console.log(isPalindrome('racecar')); // Expected output: true
// console.log(isPalindrome('hello'));   // Expected output: false



// function findBinary (decimal, result) {

//     if (decimal === 0) 
//     return result; 

//     result = decimal % 2 + result; 

//     return findBinary(decimal / 2, result)
// }


// function recursiveSummation(inputNumber) {
//     if (inputNumber <= 1) 
//         return inputNumber; 
//     return inputNumber + recursiveSummation(inputNumber - 1); 
// }

// console.log("result:", recursiveSummation(3))

// function binarySearch(arr, target, left = 0, right = arr.length -1) {
//     //Base case: If the range is invalid, the target is not in the array
//     if (left > right) {
//         return -1; // Target not found
//     }

//     // Find the middle index
//     const mid = Math.floor((left + right) / 2); 

//     // Check if the middle element is the target
//     if (arr[mid] === target) {
//         return mid; //Target found, return its index
//     }

//     // Recursive case: Search in the left or right half
//     if(arr[mid] > target) {
//         return binarySearch(arr, target, left, mid - 1); // Search left half
//     } else {
//         return binarySearch(arr, target, mid + 1, right); // Search right half
//     }
// }

// // Example usage:
// const numbers = [1, 3, 5, 7, 9, 11, 13];
// const target = 7;
// const result = binarySearch(numbers, target);

// if (result !== -1) {
//     console.log(`Target found at index: ${result}`);
// } else {
//     console.log("Target not found in the array.");
// }

// // when searching through an array, valid indexes range from 0 to the array's length minus one. [-1] is not a valid index in JS arrays for accessing elements (though its sometimes used for other purposes). Returning [-1] is a common convention in programming to indicate failure or absence of a value. 

// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1; // Target not found
//     }

//     const mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//         return mid; // Target found
//     }

//     if (arr[mid] > target) {
//         return binarySearch(arr, target, left, mid - 1); // Search left half
//     } else {
//         return binarySearch(arr, target, mid + 1, right); // Search right half
//     }
// }

// function searchInUnsortedArray(unsortedArr, target) {
//     const sortedArr = [...unsortedArr].sort((a, b) => a - b); // Sort the array
//     const result = binarySearch(sortedArr, target);
//     return result !== -1
//         ? `Target found at index ${result} in sorted array`
//         : "Target not found.";
// }

// // Example usage:
// const numbers = [23, 5, 7, 3, 17, 11, 19];
// const target = 7;

// console.log(searchInUnsortedArray(numbers, target));


// function fibonacci (n) {
//     if (n <= 1) {
//         return n; // Base case 
//     }

//     return fibonacci(n-1) + fibonacci(n-2); // recursive case
// }

// console.log(fibonacci(5));


// function power (base, exponent) {
//     if (exponent === 0) {
//         return 1 
//     } 
//     return base * power(base, exponent - 1); 
// }

// console.log(power(2,4))


// function factorial (number) {
//     if (number === 1) {
//         return 1; 
//     }

//     return number * factorial(number - 1); 
// }

// let number = 6; 

// // console.log('factorial result:', factorial(number))

// console.log(`The factorial of ${number} is ${factorial(number)}`)

// function all(array, callback) {
//     //Base case: if the array is empty, return true (no elements failed the test)
//     if (array.length === 0) {
//         return true; 
//     }

//     //Check the first element
//     if(!callback(array[0])) {
//         return false; // If the first element fails, return false
//     }

//     //Recursive call: check the rest of the array
//     return all(array.slice(1), callback); 
// }

// //example usage: 

// const isEven = (num) => num < 7; 

// console.log(all([2,4,8], isEven))

// function productOfArray(array) {
//     if (array.length === 0) {
//         return 1; 
//     }

//     // if (array.length === 1 && array[0] === 1) {
//     //     return 1; 
//     // }

//     return array[0] * productOfArray(array.slice(1)); 
// }

// console.log(productOfArray([1,2,3,10]))


// function contains(object, value) {
//     // Check if the value is directly at any property
//     // This is a for...in loop that iterates over all the keys (properties) in the object.
//     for (const key in object) {
//         //this checks if the key is a direct property of the object, not inherited from its prototype
//         if (object.hasOwnProperty(key)) {
//             //access the value of the current key with object[key] and compares it to the value using === (strict equality, which checks both value and type)
//             if (object[key] === value) {
//                 return true; // Return true if value is found
//             }

//             // If the value is an object, recursively search for it
//             if (typeof object[key] === 'object' && object[key] !== null) {
//                 if (contains(object[key], value)) {
//                     return true; // Return true if found in nested object
//                 }
//             }
//         }
//     }
//     return false; // Return false if the value is not found anywhere
// }

// function countIntegers(array) {
//     let count = 0;

//     for (const element of array) {
//         if (Array.isArray(element)) {
//             // Recursive call for nested arrays
//             count += countIntegers(element);
//         } else if (Number.isInteger(element)) {
//             // Increment count if element is an integer
//             count += 1;
//         }
//     }

//     return count;
// }

// const arr1 = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]

// console.log(countIntegers(arr1)); 

// function sumSquares (array) {
//     let sum = 0; 

//     for (const element of array) {
//         if (Array.isArray(element)) {
//             sum += sumSquares(element)
//         } else if (Number.isInteger(element)) {
//             sum +=  element ** 2;
//         }
//     }

//     return sum; //explicity return the sum. In JS, a function that doesn't explicitly return a value will return undefined by default; 
// }

// let list = [1,2,3]; 

// console.log(sumSquares(list))

// let nestedList = [10,[[10],10],[10]] ;
// console.log(sumSquares(nestedList)); 

// function replicateArrayElements(times, input) {
//     if (Array.isArray(input)) {
//         // Recursively process each element of the array
//         return input.map(element => replicateArrayElements(times, element));
//     } else if (Number.isInteger(input)) {
//         // If the input is a number, replicate it
//         return Array(times).fill(input);
//     } else {
//         // Handle non-integer or non-array inputs if needed
//         return null;
//     }
// }

// // Example usage:
// const result = replicateArrayElements(3, [5]);
// console.log(result); 


// function fibs(n) {
//     if (n <= 0) return []; // Handle cases where n is 0 or negative
//     if (n === 1) return [0]; // If only one number is requested, return [0]

//     const result = [0, 1]; // Start with the first two Fibonacci numbers

//     for (let i = 2; i < n; i++) {
//         result.push(result[i - 1] + result[i - 2]); // Add the sum of the two previous numbers
//     }

//     return result; // Return the full sequence
// }

// // Example usage:
// console.log(fibs(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]


// function fibsRec(n) {
//     if (n <= 0) return []; // Handle cases where n is 0 or negative
//     if (n === 1) return [0]; // Base case: return the first Fibonacci number
//     if (n === 2) return [0, 1]; // Base case: return the first two Fibonacci numbers

//     // Recursive step:
//     const fibs = fibsRec(n - 1); // Get the Fibonacci sequence for n-1
//     fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]); // Add the next number
//     return fibs; // Return the updated sequence
// }

// // Example usage:
// // console.log(fibsRec(4)); 

// function mergeSort(array) {
//     // Base case: if the array has 1 or 0 elements, it is already sorted
//     if (array.length <= 1) {
//         return array;
//     }

//     // Step 1: Split the array into two halves
//     const mid = Math.floor(array.length / 2);
//     const left = array.slice(0, mid);
//     const right = array.slice(mid);

//     // Step 2: Recursively sort each half
//     const sortedLeft = mergeSort(left);
//     const sortedRight = mergeSort(right);

//     // Step 3: Merge the sorted halves
//     return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     // Merge the two sorted arrays
//     // leftIndex < left.length ensures that we don't try to access an element beyond the end of the left array
//     // As long as both arrays (right & left) have elements left to compare, the loop keeps running. 
//     while (leftIndex < left.length && rightIndex < right.length) {
//         //this is the comparison between the current elements in the left and right arrays 
//         if (left[leftIndex] < right[rightIndex]) {
//             //if the element(s) in the left is smaller than the right, the algorithm will add it to the result array. 
//             result.push(left[leftIndex]);
//             //increment left index to move to the next element in the left array 
//             leftIndex++;
//         } else {
//             //if the condition is false, it means the element from the right array is smaller or equal to the element from the left array
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     // If there are any remaining elements in left or right, append them
//     return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// }

// console.log(mergeSort([3,2,1,13, 8, 5, 0,1]))

// function oddNumbersLessThanTen() {
//     let currentNumber = 1;
  
//     while (currentNumber < 10) {
//       if (currentNumber % 2 !== 0) {
//         console.log(currentNumber);
//       }
  
//       currentNumber += 1;
//     }
//   }

//  oddNumbersLessThanTen();  

// function printPairs(N) {
//     for (let i = 1; i <= N; i++) {
//         for (let j = 1; j <=N; j++) {
//             console.log(`(${i}, ${j})`)
//         }
//     }
// }

function printStudentPairs(N) {
    for (let i = 1; i <= N; i++) {           // Outer loop: Row (1 to N)
        for (let j = 1; j <= N; j++) {       // Middle loop: Column (1 to N)
            for (let k = 1; k <= N; k++) {   // Inner loop: Layer (1 to N)
                console.log(`(${i}, ${j}, ${k})`); // Print the 3D pair
            }
        }
    }
}

printStudentPairs(3)

 