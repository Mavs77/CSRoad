console.log("test")


// function binarySearch(arr, target) {
//     let left = 0; //start index
//     let right = arr.length - 1; //end index

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2); //find the middle index

//         if (arr[middle] === target) {
//             return `Found ${target} at index ${middle}`
//         } else if (arr[middle] < target) {
//             left = middle + 1; //focus on teh right half
//         } else {
//             right = middle - 1; //focus on the left half 
//         }
//     }

//     return `${target} not found in the array`
// }

// const numbers = [1,3,5,7,9,11,13]; 

// console.log(binarySearch(numbers,7))

// TreeNode class that defines each individual node in the tree
class TreeNode {
    constructor(value) {
      this.value = value;  // The value of the node (the data)
      this.left = null;     // Left child (initially null)
      this.right = null;    // Right child (initially null)
    }
  }
  
  // Binary Search Tree (BST) class
  class BST {
    // Initializes an empty tree with the root set to null
    constructor() {
      this.root = null;  // Root is initially null
    }
  
    // Method to insert a new value into the tree while maintaining BST rules
    insert(value) {
      const newNode = new TreeNode(value);  // Create a new tree node with the given value
  
      // If the tree is empty, set the root to the new node
      if (this.root === null) {
        this.root = newNode;  // First value becomes the root
        return;
      }
  
      // Start from the root and find the correct spot for the new value
      let current = this.root;
      while (true) {
        if (value < current.value) {  // If the value is less than the current node's value
          if (current.left === null) {  // If there is no left child
            current.left = newNode;  // Insert the new node as the left child
            return;
          }
          current = current.left;  // Otherwise, move to the left child
        } else {  // If the value is greater or equal to the current node's value
          if (current.right === null) {  // If there is no right child
            current.right = newNode;  // Insert the new node as the right child
            return;
          }
          current = current.right;  // Otherwise, move to the right child
        }
      }
    }
  
    // Method to display the tree in a readable format
    display(node = this.root, prefix = '') {
      if (node !== null) {  // If the current node is not null
        console.log(`${prefix}${node.value}`);  // Print the node's value
        this.display(node.left, `${prefix}L- `);  // Display left child with prefix "L-"
        this.display(node.right, `${prefix}R- `);  // Display right child with prefix "R-"
      }
    }
  }
  
  // Create an instance of the BST class
  const bst = new BST();
  
  // Insert the values into the BST
  const numbers = [7, 4, 9, 1, 6, 8, 10];
  numbers.forEach(num => bst.insert(num));
  
  // Display the tree structure
  bst.display();
  

  


