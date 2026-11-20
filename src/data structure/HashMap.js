//Hashmap (Map)
//A hashmap stores key-value pairs, where each key is unique.

const myMap = new Map()

// Add key-value pairs
myMap.set('name', 'John')
myMap.set('age', 30)
myMap.set('city', 'New York')
myMap.set(5, 'New York')

// Get value by key
console.log(myMap.get('name')) // Output: John
console.log(myMap.get('age'))  // Output: 30

// Check size
console.log(myMap.size) // Output: 3

// Check if a key exists
console.log(myMap.has('city'))    // Output: true
console.log(myMap.has('country')) // Output: false

// Delete a key-value pair
myMap.delete('age')

// Iterate through the map
myMap.forEach((value, key) => console.log(key, value)) // Output: name John, city New York

// Clear the map
myMap.clear()
console.log(myMap.size) // Output: 0

