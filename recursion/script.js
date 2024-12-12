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


function recursiveSummation(inputNumber) {
    if (inputNumber <= 1) 
    return inputNumber; 

    return inputNumber + recursiveSummation(inputNumber - 1); 
}
