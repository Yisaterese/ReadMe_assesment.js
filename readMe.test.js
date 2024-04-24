let {classTestScores, addScores,squareScores,myClasses,expenses,bookDistribution} = require("./ReadMe")



test("score equals 70 or above ",()=>{
  expect(classTestScores([56,34,78,98,67,45,70,80,74,45])).toEqual([78, 98,70, 80, 74])
})

test("add 5 to every score",()=>{
  expect(addScores([1,2,3])).toEqual([6,7,8])
})

test("square every score in an array ",()=>{
  expect(squareScores([5,4,3,])).toEqual([25,16,9])
})

test("test for afternoon classes",()=>{
  expect(myClasses(["9:00 AM", "11:00 AM","1:00 PM","3:00 PM","5:00 PM"])).toEqual(["1:00 PM","3:00 PM","5:00 PM"])
})

test("test total ammount spent",()=>{
  let groceries ={categorie:"groceries",amount: 150}
  let dining = {categorie:"dining out",amount: 100}
  let transportation = {categorie:"transportation",amount: 50}
  let entertainment ={categorie:"entertainment", amount: 80 }
 
  var objects = {groceries,dining,transportation,entertainment}
  expect(expenses(objects)).toBe(380)
})

test("assign book to each member"){
 let book1 ={author:"author",title:"title"}
 let book2 ={author1:"author1",title1:"title1"}
 let book3 = {author2:"author2",title2:"title2"}
 let Emily ={name:"Emily"}
let Jack ={name:"jack"}
let Sophia ={name:"Sophia"}

let books = [book1,book2,book3]
let members = [Emily,Jack,Sophia]

// let newMembers[
//   Emily ={name:"Emily",book1},
//   Jack ={name:"jack",book2},
//   Sophia ={name:"Sophia",book3}
// ]

expect(bookDistribution(books,members)).toEqual(newMembers)

}