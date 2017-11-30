function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  var roll = 0;
//console.log(answer);
//console.log(roll);

  return function() {
    /* your code here */

 //   roll++;
    return list[roll++];
 //   return answer;
 //console.log(list);
  }

}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());