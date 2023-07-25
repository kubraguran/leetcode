
//Common diviser for strings


//gcd 
function gcd(x, y) {
  if (y === 0) {
    return x;
  } else {
    return gcd(y, x % y);
  }
}

// Example usage:
console.log(gcd(48, 18)); // Output: 6

/*

Since y is not zero (18 !== 0), we enter the else block.
We make a recursive call to gcd(y, x % y), which becomes gcd(18, 48 % 18).
48 % 18 is 12, so we call gcd(18, 12).
Again, since y is not zero (12 !== 0), we make another recursive call to gcd(y, x % y), which becomes gcd(12, 18 % 12).
18 % 12 is 6, so we call gcd(12, 6).
This time, y becomes zero (6 === 0), so we return x, which is 12
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
 
 //string de toplama birlestiyot
  //leetcode != coodeleet
if(str1 + str2 != str2 + str1) {
   return ''
}

let gcd = function(x,y) {
   if(y === 0) {  // if y is null then x is the gcd
     return x
   }else{
      return gcd(y, x % y) //return the remainder of x & y
                           //which will be the gcd in our case
   }
}
//create a variable to store gcd
let value = gcd(str1.length, str2.length)
return str1.slice(0,value)
  

};


//check three row and if they all 0 then we means we have 0 space count++
//and for the egdes add 0's
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if(n === 0) {
        return true;
    }

    flowerbed.push(0)
    flowerbed.unshift(0)

     let count = 0;

     for(let i = 0; i < flowerbed.length - 2; i++) {
        let curr = flowerbed[i]
        let next = flowerbed[i + 1]
        let next2 = flowerbed[i + 2]

        if(curr === 0 && next === 0 && next2 === 0){
            count++;
             if(count === n){
            return true
        }
            i++;
        }
    
       
     }
     return false


  //reverse only vowels

  /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
let vowels = new Set(['a', 'e', 'i', 'o', 'u','A','E','I','O','U']);
let split = s.split("")
let left = 0;
let right = split.length-1;

while(left < right){
  if(vowels.has(split[left])){
    while(right > left){
      if(vowels.has(split[right])){
        const temp = split[left];
        split[left] = split[right];
        split[right] = temp;
        right--;
        break
      }
      right--;
    }
  }
  left++;
}
return split.join("")
};


  /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
let vowels = new Set(['a', 'e', 'i', 'o', 'u','A','E','I','O','U']);
let split = s.split("")
let left = 0;
let right = split.length-1;

while(left < right){
  if(vowels.has(split[left])){
    while(right > left){
      if(vowels.has(split[right])){
          //this part swap
        const temp = split[left];
        split[left] = split[right];
        split[right] = temp;
        right--;
        break
      }
      right--;
    }
  }
  left++;
}
return split.join("")
};




  /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  //solution - 1
//let sum = nums.reduce((x,y) =>  x * y)
//let result = nums.map((a,b) => sum/a)

//solution 2
// its not 0(n) but this reduce means product all element expect itself
let sum = []
for(let i = 0; i < nums.length; i++){
  const find = nums.reduce((x, y, index) => (index !== i ? x * y : x), 1);
  sum.push(find)
}

return sum
};

  
//O(n) solution 2 point approarch

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

let n = nums.length;
let result = new Array(n).fill(1)

let left = 1;
for(let i = 0; i < n; i++){
  result[i] *= left;
  left *= nums[i]
}

let right = 1;
for(let i = n - 1; i >= 0 ; i--){
  result[i] *= right;
  right *= nums[i]
}

return result
};





  /**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
let first = Infinity;
let second = Infinity;

for(let num of nums){
  //find smallest first
  if(num <= first){
    first = num
  }else if(num <= second){
    //find second smallest 
    second = num
    //and check the third one
  }else if (num > second && second > first){
    return true
  }
}

  return false
};





  

  
