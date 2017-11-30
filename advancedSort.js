
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
 //added another name to the array to test { id: 5, name: "bruce",    age: 43 }
];

function advSort(a,b) {
  if (a.name === b.name)
    if (a.age < b.age)
      return 1;
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}


students.sort(advSort);
console.log(students);