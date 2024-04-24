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
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      
    }
  }
}
module.exports = {classTestScores,addScores,squareScores,myClasses}