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

function productOfArray(array) {
    if (array.length === 0) {
        return 1; 
    }

    // if (array.length === 1 && array[0] === 1) {
    //     return 1; 
    // }

    return array[0] * productOfArray(array.slice(1)); 
}

console.log(productOfArray([1,2,3,10]))