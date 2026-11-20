hasDuplicate = (nums)=> {

   let ret = false 
   let mySet = new Set()

   nums.forEach((item, index)=> {
       
       if(mySet.has(item)){
           ret = true
       }
       else {
           mySet.add(item)
       }
   })
   
   return ret       
}

let args = [1, 2, 3, 6]

console.log(hasDuplicate(args))
