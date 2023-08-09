
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





  /**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let count = {}

    for(let char of chars){
      //create object and search if we have this val
      if(count[char]){
        //then add one 
        count[char] += 1
      }else{
        //if we dont have second time then equal = 1
        count[char] = 1
      }
    }

    //console.log(count)


  //this make an array with key and values
   let result = [];
 for(let [key, value] of Object.entries(count)){
   result.push(key,value.toString())
 }
  console.log(result)

  
};

  /**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
     
     let count = {};
    for(let char of chars){
        if(count[char]){
            count[char] += 1;
        }else{
            count[char] = 1
        }
    }

   let index = 0;
   for(const[key,value] of Object.entries(count)){
     chars[index++] = key;
     if(value > 1){
        for (let digit of value.toString()) {
                chars[index++] = digit;
            }
     }
   }
  return index
    
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
 let i = 0;
 let j = 0;

    while(i < s.length){
        if(j === t.length){
            return false
        }
        if(s[i] === t[j]){
            i++;
        }
        j++;
    }
    return true;
 
};



  /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i,1);
            i--;  
            count++;
        }
    }

  for (let i = 0; i < count; i++){
      nums.push(0)
  }

console.log(nums);
};




/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;

        maxArea = Math.max(maxArea, area);


        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};



//TWO SUM 
  /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b)
    let count = 0;
    let i = 0;
    let j = nums.length - 1

    while(i < j) {
        const sum = nums[i] + nums[j]
        if(sum < k){
            i++;
        }else if (sum > k){
            j--;
        }else{
             count++;
             i++;
             j--;
        }
    
    }
    return count
};
  







  /**
 * @param {number[]} nums
 * @return {number}
 */

 //2 lowest 1 highest 1
var maximumProduct = function(nums) {
 let sort = nums.sort((a,b) => a - b)

 let n = nums.length;

 let maxPos = sort[n - 1] * sort[n - 2] * sort[n - 3]
 let maxNeg = sort[0] * sort[1] * sort[n - 1]
 return Math.max(maxPos, maxNeg)
};
  







  /**
 * @param {number[]} nums
 * @return {number}
 */
 //max max
var arrayPairSum = function(nums) {
    let sum = 0;
    let sorted = nums.sort((a,b) => a - b)
    console.log(sorted)
     for(let i = 0; i < sorted.length; i += 2){
          sum += sorted[i]   
     
     }
  return sum
};







  /**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

 //reduce both of them and divide
var findContentChildren = function(g, s) {
   let sum = 0;
   let c = g.sort((a,b) => a - b)
   let sw = s.sort((a,b) => a - b)
   let i = 0;
   let j = 0;

   while(i <= c.length && j <= sw.length){
     if(sw[j] >= c[i]){
       j++;
       i++;
       sum++;
     }else{
       j++;
     }
   }
   return sum
};



  /**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let sorted = nums.sort((a,b) => a - b)


    for(let i = 0; i <= sorted.length; i++){
    if(sorted[i] % 2 === 0){
    evens = sorted.splice(i, 1)
    sorted.splice(0,0,evens)
     
    }
    }
 return sorted.flat()
};
