const isPalindrome1 = (str:string):boolean => { // Time Complexity: O(n²) | Space Complexity: O(n)
   console.time('isPalindrome1')
   let clean:string = ''                          
   let str1:string = ''                           

   for (let i = 0; i < str.length; i++) {      // O(n) → Loop goes through each character once   

      if(str[i] >= 'A' && str[i] <= 'Z' ||        
         str[i] >= 'a' && str[i] <= 'z' ||
         str[i] >= '0' && str[i] <= '9' ) 
      
         clean += str[i].toLowerCase()         // O(n) per append → total O(n²) due to string immutability
   }

   str1 = clean.split('').reverse().join('')   // O(n) — split, reverse, and join each take O(n)
   console.timeEnd('isPalindrome1')
   return clean === str1                       // O(n) — string comparison       
}

const isPalindrome2 = (str:string):boolean => { // Time Complexity: O(n) | Space Complexity: O(n)
   console.time('isPalindrome2')
   let clean: string[] = []                       
   let str1:string = ''                           

   for (let i = 0; i < str.length; i++) {      // O(n) → Loop goes through each character once   

      if(str[i] >= 'A' && str[i] <= 'Z' ||        
         str[i] >= 'a' && str[i] <= 'z' ||
         str[i] >= '0' && str[i] <= '9' ) 
      
        clean.push(str[i].toLowerCase())       // O(1) per push → total O(n)
   }

   str1 = [...clean].reverse().join('')        // O(n) copy + reverse + join
   console.timeEnd('isPalindrome2')
   return clean.join('') === str1              // O(n) join + comparison  
}

const isAlphaNum = (char:string):boolean =>
  (char >= 'A' && char <= 'Z') ||
  (char >= 'a' && char <= 'z') ||
  (char >= '0' && char <= '9')

const isPalindrome3 = (str:string):boolean => { // Time Complexity: O(n) | Space Complexity: O(n)
   console.time('isPalindrome3')
   let clean:string[] = []                        
   
   for (let i = 0; i < str.length; i++)        // O(n) → Loop goes through each character once      
      if (isAlphaNum(str[i]))                     
         clean.push(str[i].toLowerCase())      // O(1) per push → total O(n)
   
   let left = 0                                   
   let right = clean.length - 1                   

   while ( left < right ) {                    // O(n) → traverses at most n/2 steps
      if(clean[left] != clean[right])
         return false
      left++
      right--      
   }
   console.timeEnd('isPalindrome3')
   return true                                 // O(1)
}

const isPalindrome4 = (str:string):boolean => {     // Time Complexity: O(n) | Space Complexity: O(1)
  console.time('isPalindrome4')
  let left = 0                
  let right = str.length - 1  

  while (left < right) {                            // O(n) — each character is checked once
    
   while (left < right && !isAlphaNum(str[left]))   // O(n) total — skips non-alphanumerics from the left
      left++   
   while (left < right && !isAlphaNum(str[right]))  // O(n) total — skips non-alphanumerics from the right
      right--  

   if (str[left].toLowerCase() !==                  // O(1) — Each toLowerCase() and comparison is constant time
       str[right].toLowerCase())                   
      return false                                          
   
   left++                                                   
   right--                                                  
  }
  console.timeEnd('isPalindrome4')
  return true                                       // O(1)   
}


console.log(isPalindrome1('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome1('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome1("No lemon, no melon"))             // true
console.log(isPalindrome1('Ovo'))                            // true
console.log(isPalindrome1('not a palindrome'))               // false

console.log(isPalindrome2('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome2('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome2("No lemon, no melon"))             // true
console.log(isPalindrome2('Ovo'))                            // true
console.log(isPalindrome2('not a palindrome'))               // false

console.log(isPalindrome3('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome3('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome3("No lemon, no melon"))             // true
console.log(isPalindrome3('Ovo'))                            // true
console.log(isPalindrome3('not a palindrome'))               // false

console.log(isPalindrome4('Was it a car or a cat I saw?'))   // true
console.log(isPalindrome4('A man, a plan, a canal: Panama')) // true
console.log(isPalindrome4("No lemon, no melon"))             // true
console.log(isPalindrome4('Ovo'))                            // true
console.log(isPalindrome4('not a palindrome'))               // false