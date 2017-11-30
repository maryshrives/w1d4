// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
//added i on line 6 + 10, and in console.log message to give answer
      found(i);   // execute callback
    }
  }
}
function actionWhenFound(i) {
  console.log("Found him! He was at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);