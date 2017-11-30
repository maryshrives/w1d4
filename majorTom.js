var words = ["ground", "control", "to", "major", "tom"];

function map(mapping, callback) {
  var newArr = [];
  mapping.forEach(function(mapping) {
    newArr.push(callback(mapping));
//    console.log(newArr); // adds each item one at a time
  })
  console.log(newArr);
//  return newArr;
}



map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});