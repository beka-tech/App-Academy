
// Range & Loop Problems
function logBetween(lowNum, highNum) {
  let res = [];
  for (let i = lowNum; i <= highNum; i++) res.push(i);
  return res;
}

function logBetweenStepper(min, max, step) {
  let res = [];
  for (let i = min; i <= max; i += step) res.push(i);
  return res;
}

function printReverse(min, max) {
  let res = [];
  for (let i = max - 1; i > min; i--) res.push(i);
  return res;
}

// Conditionals
function fizzBuzz(max) {
  let res = [];
  for (let i = 0; i <= max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 15 !== 0) res.push(i);
  }
  return res;
}

// Prime / Math
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  let res = [];
  let num = 2;
  while (res.length < n) {
    if (isPrime(num)) res.push(num);
    num++;
  }
  return res;
}

function factorial(n) {
  let prod = 1;
  for (let i = 1; i <= n; i++) prod *= i;
  return prod;
}

function greatestCommonFactor(a, b) {
  let gcf = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcf = i;
  }
  return gcf;
}

function lcm(a, b) {
  return (a * b) / greatestCommonFactor(a, b);
}

// Array Searching / Counting
function maxValue(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  return max;
}

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

function factorArray(arr, num) {
  let res = [];
  for (let n of arr) if (num % n === 0) res.push(n);
  return res;
}

function oddRange(end) {
  let res = [];
  for (let i = 1; i <= end; i += 2) res.push(i);
  return res;
}

// Strings
function reverseHyphenString(str) {
  return str.split('-').reverse().join('-');
}

function abbreviate(sentence) {
  const vowels = "aeiou";
  return sentence.split(" ").map(word => {
    if (word.length <= 4) return word;
    let res = "";
    for (let ch of word) {
      if (!vowels.includes(ch)) res += ch;
    }
    return res;
  }).join(" ");
}

function hipsterfyWord(word) {
  const vowels = "aeiouAEIOU";
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
}

function hipsterfy(sentence) {
  return sentence.split(" ").map(hipsterfyWord).join(" ");
}

// Objects
function adults(people) {
  let res = [];
  for (let p of people) if (p.age >= 18) res.push(p.name);
  return res;
}

function countScores(people) {
  let scores = {};
  for (let p of people) {
    if (!(p.name in scores)) scores[p.name] = 0;
    scores[p.name] += p.score;
  }
  return scores;
}

function valueCounter(obj, val) {
  let count = 0;
  for (let key in obj) if (obj[key] === val) count++;
  return count;
}

function elementCount(arr) {
  let count = {};
  for (let el of arr) {
    if (!(el in count)) count[el] = 0;
    count[el]++;
  }
  return count;
}

// 2D Arrays
function twoDimensionalTotal(arr) {
  let sum = 0;
  for (let row of arr) {
    for (let n of row) sum += n;
  }
  return sum;
}

function countInnerElement(arr) {
  let res = {};
  for (let row of arr) {
    for (let el of row) {
      if (!(el in res)) res[el] = 0;
      res[el]++;
    }
  }
  return res;
}

function reverse2D(arr) {
  let res = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      res += arr[i][j];
    }
  }
  return res;
}

// Patterns
function intersect(a, b) {
  let res = [];
  for (let el of a) if (b.includes(el)) res.push(el);
  return res;
}

function mirrorArray(arr) {
  return arr.concat([...arr].reverse());
}

function threeInARow(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) return true;
  }
  return false;
}

function threeIncreasing(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i+1] === arr[i] + 1 && arr[i+2] === arr[i] + 2) return true;
  }
  return false;
}

function hasSymmetry(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    if (arr[l] !== arr[r]) return false;
    l++; r--;
  }
  return true;
}

function signFlipCount(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 || nums[i+1] === 0) continue;
    if (nums[i] > 0 !== nums[i+1] > 0) count++;
  }
  return count;
}

function powerSequence(base, length) {
  let res = [base];
  while (res.length < length) {
    res.push(res[res.length - 1] * base);
  }
  return res;
}

module.exports = {
  logBetween,
  logBetweenStepper,
  printReverse,
  fizzBuzz,
  isPrime,
  firstNPrimes,
  factorial,
  greatestCommonFactor,
  lcm,
  maxValue,
  myIndexOf,
  factorArray,
  oddRange,
  reverseHyphenString,
  abbreviate,
  hipsterfyWord,
  hipsterfy,
  adults,
  countScores,
  valueCounter,
  elementCount,
  twoDimensionalTotal,
  countInnerElement,
  reverse2D,
  intersect,
  mirrorArray,
  threeInARow,
  threeIncreasing,
  hasSymmetry,
  signFlipCount,
  powerSequence
};
