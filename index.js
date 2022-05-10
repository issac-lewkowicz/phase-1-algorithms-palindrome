// function isPalindrome(word) {
//   let halfLength = Math.ceil(word.length / 2)
//   const firstHalf = word.slice(0, halfLength);
//   if ((word.length % 2) !== 0 ) {halfLength--};
//   const secondHalf = word.slice(halfLength)
//   const revSecondHalf = secondHalf.split('').reverse().join('')
//   return firstHalf === revSecondHalf ? true : false;
// }

// solution 2:

function isPalindrome(word) {
  let halfLength = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, halfLength);
  let i = 0;
  for (let char of firstHalf) {
    if (word[word.length-1-i] !== char) return false; 
    i++;
  }
  return true;
}


/* 
  recive string and check (half)length.
  slice word down middle, add mid letter to both sides (if length is uneven).
  split into array, reverse and join the reversed second half.
  compare both halves. return boolien. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
