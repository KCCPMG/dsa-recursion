/** product: calculate the product of an array of numbers. */

function product(nums, index=0) {
  if (index+1 === nums.length) return nums[index];
  else return (nums[index] * product(nums, index+1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, maxLength=0, index=0) {
  maxLength = Math.max(maxLength, words[index].length)
  
  if (index+1 ===words.length) {
    return maxLength;  
  } else return longest(words, maxLength, index+1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, outStr="", index=0) {
  if (index === str.length) return outStr;
  else {
    if (index % 2 === 0) {
      outStr += str[index];
    }
    return everyOther(str, outStr, index+1);
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return revString(str) === str;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, counter=0) {
  arr = [...arr]
  if (arr.shift() === val) return counter;
  else if (arr.length === 0) return -1;
  else {
    counter++;
    return findIndex(arr, val, counter);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, revStr="") {
  if (str==="") {
    return revStr;
  } else {
    let char = str.slice(str.length-1);
    str = str.slice(0, str.length-1);
    revStr+=char;
    return revString(str, revStr);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (let val of Object.values(obj)) {
    if (typeof val === "string") {
      arr.push(val);
    } else if (typeof val === "object") {
      arr = arr.concat(gatherStrings(val))
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=null) {
  if (end===null) end = arr.length;
  const mid = Math.floor((start + end) / 2);
  
  if (arr[mid]===val) {
    return mid;
  } else if (start >= end) {
    return -1;
  } else {
    if (arr[mid] < val) {
      start = mid+1;
    } else {
      end = mid-1;
    }

    return binarySearch(arr, val, start, end);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
