"Assesment"
//const myClassArray = ["9:00 AM", "11:00 AM","1:00 PM","3:00 PM","5:00 PM"]

//const testScores = [56,34,78,98,67,45,70,80,74,45]


function classTestScores(testScores ){
  let newArray = []
  testScores.filter(n => {if(n >= 70)return newArray.push(n)})
}
console.log(classTestScores([56,34,78,98,67,45,70,80,74,45]))

function addScores(studentScores){
 return  studentScores.map(n => n + 5)
}

function squareScores(scores){
  return scores.map(n => n * n)
}

function myClasses(classes){
  return classes.filter(time => time.endsWith("PM"))
}

console.log(addScores([56,34,78,98,67,45,70,80,74,45]))

module.exports = {classTestScores,addScores,squareScores,myClasses}