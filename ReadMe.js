"Assesment"
function classTestScores(testScores){
  return testScores.filter(n => n >= 70)
}

function addScores(studentScores){
 return  studentScores.map(n => n + 5)
}

function squareScores(scores){
  return scores.map(n => n * n)
}

function myClasses(classes){
  return classes.filter(time => time.endsWith("PM"))
}

function expenses(object){
  let total = 0
  for (const key in object) {
    total += object[key].amount
  }
  return total
}
let book1 ={author:"author",title:"title"}
let book2 ={author1:"author1",title1:"title1"}
let book3 = {author2:"author2",title2:"title2"}
let Emily ={name:"Emily"}
let Jack ={name:"jack"}
let Sophia ={name:"Sophia"}

let books = [book1,book2,book3]
let members = [Emily,Jack,Sophia]

function bookDistribution(books,members){
  for (const iterator of books) {
    for (const key of members) {
      members[key] = books[iterator] 
      }
  }
  return members
}


function filterUnhealthyItems(mylist){
  let healthyShoppingList = []
  mylist.forEach(function (index){
    if(index.isHealthy == true){healthyShoppingList.push(index)}

})
return healthyShoppingList

}
console.log(bookDistribution(books,members))
module.exports = {classTestScores,addScores,squareScores,myClasses,expenses,bookDistribution,filterUnhealthyItems}