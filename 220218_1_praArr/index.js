const students = [
  {
    name: "Abby",
    age: 17,
    gender: "female",
  },
  {
    name: "Betty",
    age: 18,
    gender: "female",
  },
  {
    name: "Charlie",
    age: 16,
    gender: "male",
  },
  {
    name: "David",
    age: 19,
    gender: "male",
  },
  {
    name: "Emily",
    age: 18,
    gender: "female",
  },
]

// map
const studentsName = students.map(item => ({ "name": item.name }))
console.log(studentsName)

// map 
const studentsName2 = students.map(item => {
  let title
  item.gender === "male" ? title = "Mr." : title = "Miss"

  return {
    "name": `${title} ${item.name}`
  }
})
console.log(studentsName2)

// filter
const studentsFilter = students.filter(item => (item.gender === "female") && (item.age >= 18))
console.log(studentsFilter)

// reduce -> acc為累計值，0 為初始值
const studentsAveAge = students.reduce((acc, item) => acc + item.age, 0)
let aveAge = studentsAveAge / students.length
console.log(studentsAveAge)
console.log(aveAge)