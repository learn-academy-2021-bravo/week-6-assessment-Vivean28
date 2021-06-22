// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("turnToSent", () =>{
  var people = [
    { name: "ford prefect", occupation: "hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]
  it("returns an array with a sentence about each person with their names capitalized. ", () =>{
      expect(turnToSent(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
    
  })
})
//Create a function called senteFunc
// that takes an array of objects
// declare an empty array called let newArray = []
// itirate throgh the array 
// after I have accsess to each object in the array
// after being inside of the object, I need to target the name with the . notaion
// I am going declare a varible to save my miniplated name
// after I have the name then I will split it split(" ") the reason why I have the space in the split, is 
// because I want to split by space in the sentance
//now I have an array!!// ["ford", "prefect"]
// now I will map over the array and at every index 
//target the [0] index and upper case it
//then add the rest of the word .slice(1) here I am saying from start from index 1 and on
//["Ford", "Prefect"]
//I am going to join it .join(" ") this will give me a string and it is no longer an array
// "Ford Prefect"
// I am going to push the sentance to my newArray = []
// newArray.push(${the variable that is holding my miniplated name} is a ${array[i].occupation})
//return newArray

// b) Create the function that makes the test pass.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

const turnToSent = (array)=>{
 let newArray =[]
  for(let i = 0; i<array.length; i++){

    let eachName = array[i].name
    let splitedName = eachName.split(" ")
    let mapedArray = splitedName.map(value =>{
        return `${value[0].toUpperCase()}${value.slice(1)}`
     })
     let capitlizedName =  mapedArray.join(" ")
      newArray.push(`${capitlizedName} is a ${array[i].occupation}.`)
  }
  return newArray
}
// console.log(turnToSent(people))



// const turnToSent = (array) =>{
//   let mapedArray = array.map(value => {
//     return value.name
//     //this gave me all the values of the name 
//     //now I need the values of acupation 
//   })
//   return mapedArray
// }
// // finsh this get info from
// console.log(turnToSent(people))

// VM42:13 (3) ["ford prefect", "zaphod beeblebrox", "arthur dent"]











// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



describe("returnRemainder", () =>{
  var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () =>{
      expect(returnRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(returnRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
    
  })
})


// b) Create the function that makes the test pass.
// create a function called returnRemainder
// takes in a mixed data array
// assigen a variable called new array and map over the arrays values with the .map()
// need to check every value in the map and == to the data typeof number 
// if so then assign value divisibale by 3 to a variable and then return the remainder
// outside of the mapped value now filter throught the final array to make sure it is only numbers datatype
// returns returns an array of only the REMAINDERS of the numbers when divided by 3.


var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]

const returnRemainder = (array) =>{
 let newArray = array.map(value =>{
  if(typeof value == "number"){
    let remainder  = value % 3
    return remainder
    // console.log(remainder)
  }
 })
 let finaleArray = newArray.filter(value => typeof value === "number")
 return finaleArray
//  let filltredArray = array.filter(value => value % 3 !== 0 )
//   console.log(filltredArray) 
}
// console.log(returnRemainder(hodgepodge1))








// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.



// a) Create a test with an expect statement using the variables provided.

describe("sumCubed", () =>{
  var cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  var cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("returns the sum of all the numbers cubed.", () =>{
      expect(sumCubed(cubeAndSum1)).toEqual(99)
      expect(sumCubed(cubeAndSum2)).toEqual(1125)
    
  })
})


// b) Create the function that makes the test pass.
// create a function called sumCubed 
// that takes in an array of numbers(array)
// and it returns a the sum of all the numbers cubed
// I am going to declare a variable called mappedArray 
// in the mappedArray I am going to map over the array and retrun the Math.pow(in the value and I am going to   pass it 3 so it can cube my value) and I will return it
// after getting the cubed value then get the sum of all nums cubed
//the I will take the mappedArray variable and use the .reduce method
// this method will take the acc and the current value and will then add them together.
//then I will return the variable that was assigend to get the sum of the cubed  




const sumCubed = (array) =>{
 let  mappedArray = array.map(value =>{
     return Math.pow(value, 3)
  })
let addedNums = mappedArray.reduce((acc, curr) =>{
   return acc + curr
})
  return addedNums
}