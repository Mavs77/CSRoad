console.log("test")

function reverseString (stringInput) {
    // What is the base case? 

    if (stringInput == "") {
        return ""; 
    }

    return reverseString(stringInput.substring(1)) + stringInput.charAt(0); 

    // What is the smallest amount of work I can do in each iteration? 
}

console.log(reverseString("cat"))