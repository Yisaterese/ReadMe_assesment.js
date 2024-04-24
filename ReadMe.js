"Assesment"
//const myClassArray = ["9:00 AM", "11:00 AM","1:00 PM","3:00 PM","5:00 PM"]

//const testScores = [56,34,78,98,67,45,70,80,74,45]


function classTestScores(testScores ){
  testScores.filter()

//   let newScores = []
//   let counter = 0
// for(let i = 0; i < testScores.length; i++){
//   if(testScores[i] >= 70){
//     newScores[counter] = testScores[i]
//   }    counter++
// }
// return newScores
}
console.log(classTestScores([56,34,78,98,67,45,70,80,74,45]))

function addScores(studentScores){
 return  studentScores.map(n => n + 5)
  // let newScores = []
  // let count = 0
  // for(let i = 0; i < studentScores.length; i++){
  //   newScores[count] = studentScores[i] += 5
  //   count++
  // }
  // return newScores
}

function squareScores(scores){
  return scores.map(n => n * n)
}

function myClasses(classes){
  let emptyArr = []
  classes.filter(time =>if(time.endsWith("PM")
  emptyArr.push(time)
))
}

console.log(addScores([56,34,78,98,67,45,70,80,74,45]))

module.exports = {classTestScores,addScores,squareScores}