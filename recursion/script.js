console.log("test")


function binarySearch(arr, target) {
    let left = 0; //start index
    let right = arr.length - 1; //end index

    while (left <= right) {
        let middle = Math.floor((left + right) / 2); //find the middle index

        if (arr[middle] === target) {
            return `Found ${target} at index ${middle}`
        } else if (arr[middle] < target) {
            left = middle + 1; //focus on teh right half
        } else {
            right = middle - 1; //focus on the left half 
        }
    }

    return `${target} not found in the array`
}

const numbers = [1,3,5,7,9,11,13]; 

console.log(binarySearch(numbers,7))


