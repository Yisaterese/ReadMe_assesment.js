let {classTestScores, addScores,squareScores,myClasses} = require("./ReadMe")

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