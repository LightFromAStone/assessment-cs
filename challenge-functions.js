

// the time complexity is O(n^2)
// function sumsToZero(numsArr) {
//    let negArr = [];
//    let posArr = [];
//    let numZeros = 0;
//    numsArr.forEach(num => {
//       if (num > 0)  {posArr.push(num); }
//       else if (num < 0) { negArr.push(num); }
//       else { numZeros++; }
//    })
//    if (numZeros > 1) { return true; }
//    else if (negArr.length === 0 || posArr.length === 0) { return false; }
//    else {
//       for (let i = 0; i < negArr.length; i++) {
//          if (posArr.includes(Math.abs(negArr[i]))){ return true; }
//       }
//       return false;
//    }
// }

// time complexity is O(n)
function sumsToZero(numsArr) {
   let negArr = [];
   let posArr = [];
   let numZeros = 0;
   numsArr.forEach(num => {
      if (num > 0)  {posArr.push(num); }
      else if (num < 0) { negArr.push(num); }
      else { numZeros++; }
   })
   if (numZeros > 1) { return true; }
   if (posArr.length === 0 || negArr.length === 0) { return false; }

   let negSet = new Set(negArr);
   let posSet = new Set(posArr);
   for (let i = 0; i < negArr.length; i++) {
      posArr.push(Math.abs(negArr[i]));
   }
   let unique = new Set(posArr);
   return !((posSet.size + negSet.size) === unique.size);
}


let array1 = [28, 43, -12, 30, 4, 0, 12]; // true -12,12
let array2 = [-12, 43, -12, 30, 43, 0, 12]; // true -12,12
let array3 = [28, 43, 0, 30, 4, 0, 12]; // true 0,0
let array4 = [28, 43, -1, 30, 4, 0, 12]; // false
let array5 = [28, 28, -1, 30, 4, 0, 12]; // false
let array6 = [28, 43, -1, -1, 4, 0, 12]; // false

console.log('sumsToZero results:');
console.log(sumsToZero(array1));
console.log(sumsToZero(array2));
console.log(sumsToZero(array3));
console.log(sumsToZero(array4));
console.log(sumsToZero(array5));
console.log(sumsToZero(array6));

//--------------------------------------------------------

// time complexity is O(n)
function onlyUniqueChars(str) {
   let unique = new Set(str.split(''));
   return !(unique.size < str.length);
}

console.log('onlyUniqueChars results:');
console.log(onlyUniqueChars('Monday'));
console.log(onlyUniqueChars('Moonday'));

//--------------------------------------------------------

//time complexity is O(n) for smaller strings and O(n log(n)) for larger strings (assuming code is running on V8 v7.0 or later)
function isPangram(str) {
   split = str.toLowerCase().split('');
   split.sort().reverse(); // array.prototype.sort uses Timsort on V8 v7.0+
   for (let i = 0; i < split.length; i++) {
      if (split[i] === split[i].toUpperCase()) { split.length = i; } // chop off end of array once we hit the items that aren't letters
   }
   let unique = new Set(split);
   return unique.size === 26;
} // This could probably be faster if we created the Set before looping through and chopping off the items that aren't letters. In that case, it would loop a maximum of 26 times, making that loop O(26) == O(1). Whole function would still be at least O(n) though due to .sort()

console.log('isPangram results:');
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I do not include all the letters of the alphabet"));


//--------------------------------------------------------

//time complexity is O(n) for smaller arrays and O(n log(n)) for larger arrays (assuming code is running on V8 v7.0 or later)
function findLongestWord(wordsArr) {
   wordsArr.sort((a,b) =>  b.length - a.length ); // array.prototype.sort uses Timsort on V8 v7.0+
   return wordsArr[0].length;
}

console.log('findLongestWord results:');
console.log(findLongestWord(['test', 'chocolate', 'HD']));