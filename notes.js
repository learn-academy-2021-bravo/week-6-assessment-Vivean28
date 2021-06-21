
// <!-- 
// // --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// // a) Create a test with an expect statement using the variable provided.

// describe("turnToSent", () =>{
//   var people = [
//     { name: "ford prefect", occupation: "hitchhiker" },
//     { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//     { name: "arthur dent", occupation: "radio employee" }
//   ]
//   // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthus Dent is a radio employee."]
//   it("returns an array with a sentence about each person with their names capitalized. ", () =>{
//       expect(turnToSent(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of  the galaxy.", "Arthus Dent is a radio employee."])
    
//   })
// })
// //Create a function called turnToSent 
// // that takes an array of objects 
// // returns an array with a sentence 
// //about each person with their names capitalized.
// // ##
// // I need to take my object and turn it into an array



// // b) Create the function that makes the test pass.

// var people = [
//   { name: "ford prefect", occupation: "hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "radio employee" }
// ]

// const turnToSent = (array) =>{
//     return array.map(value.name =>{
//         return `${value[0].toUpperCase()} ${value.slice(1)}`
//     })
// }
console.log(turnToSent(people))
const turnToSent = (array) =>{
  let mapedArray = array.map(value => {
    return value.name
    //this gave me all the values of the name 
    //now I need the values of acupation 
  })
  return mapedArray
}
// finsh this get info from
console.log(turnToSent(people))

//The output for the test above
VM42:13 (3) ["ford prefect", "zaphod beeblebrox", "arthur dent"]



// // const turnToSent = (array) =>{
// //   let mapedArray = array.map(value => {
// //     return value.name
// //     //this gave me all the values of the name 
// //     //now I need the values of acupation 
// //   })
// //   return mapedArray
// // }
// // // finsh this get info from
// // console.log(turnToSent(people))

// // //The output for the test above
// // VM42:13 (3) ["ford prefect", "zaphod beeblebrox", "arthur dent"]





// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//   var cubeAndSum2 = [0, 5, 10]
// const sumCubed = (array) =>{
//  let  mappedArray = array.map(value =>{
//      return Math.pow(value, 3)
//   })
// let addedNums = mappedArray.reduce((acc, curr) =>{
//    return acc + curr
// })
//   return addedNums
// }
// console.log(sumCubed(cubeAndSum2)) -->






// // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// // a) Create a test with an expect statement using the variables provided.

// var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]


// // create a function called returnRemainder
// // that takes in an array of all diffrent data types 
// // it reaturns returns an array of only the REMAINDERS of the numbers when divided by 3.
// // filter through the array and take out what is not a number
// // after I have filtered, they I need to return only the REMAINDERS of the numbers when divided by 3. 




var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]

const returnRemainder = (array) =>{
 let newArray = array.map(value =>{
  if(typeof value == "number"){
    let remainder  = value % 3
    return remainder
    // console.log(remainder)
  }
 })
 return newArray.filter(value => typeof value === "number")

//  let filltredArray = array.filter(value => value % 3 !== 0 )
//   console.log(filltredArray) 
}
console.log(returnRemainder(hodgepodge1))






// var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]

// const returnRemainder = (array) =>{
//  return filltredArray = array.filter(value => value % 3 !== 0)
  
// }

// console.log(returnRemainder(hodgepodge1))
















// var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]

// const returnRemainder = (array) =>{
//   let filltredArray = array.fillter(value =>{
//    if( value === Number){
//      return value
//    }else{
//      return false
//    }
//    })

//   return filltredArray
// }

// console.log(returnRemainder(hodgepodge1))



