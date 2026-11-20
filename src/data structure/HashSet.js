//Hashset (Set)
//A hashset is a collection of unique values. It does not allow duplicate elements.

const mySet = new Set()

// Add elements
mySet.add(1)
mySet.add(2)
mySet.add(2) // Not added, as it's a duplicate
mySet.add('hello')

// Check size
console.log(mySet.size) // Output: 3

// Check if an element exists
console.log(mySet.has(2)) // Output: true
console.log(mySet.has(3)) // Output: false

// Delete an element
mySet.delete(1)

// Iterate through the set
mySet.forEach(value => console.log(value)) // Output: 2, hello

// Clear the set
mySet.clear()
console.log(mySet.size) // Output: 0