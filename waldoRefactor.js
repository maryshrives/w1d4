function findWaldo(arr, found) {
  arr.forEach(found)
}

function actionWhenFound(person, i) {
  if (person == "Waldo")
  console.log("Found him! He was at index " + i);
//extra msg
  console.log("Where's Waldo?");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//use forEach method instead of a for loop

// arr.forEach(function(element) {
//     console.log(element);
// });