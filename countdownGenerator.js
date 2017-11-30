var countdownGenerator = function (x) {
  /* your code here */
  counter = x;
  return function() {
    if (counter > 0) {
      console.log("T-minus " + counter + "...")
    } if (counter === 0) {
      console.log("Blast Off!")
//added extra message for counter < -5
    } if (counter < 0 && counter > -5) {
      console.log("Rockets already gone, bub!")
    } if (counter < -5) {
      console.log("You're late!")
    }
    counter--;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown();