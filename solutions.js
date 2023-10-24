
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




  
  function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

let sum = new ListNode();
let head = sum;

while(list1 !== null && list2 !== null){

if(list1.val < list2.val){
    sum.next = new ListNode(list1.val);
    list1 = list1.next;
}else {
    sum.next = new ListNode(list2.val);
    list2 = list2.next;
}

sum = sum.next;
}

if(list1 !== null)
sum.next = list1;
if(list2 !== null)
sum.next = list2;


return head.next
};




var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let windows = 0;

    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === k) {
        for (let i = 0; i < k; i++) {
            windows += nums[i];
        }
        return windows / k; // Return average directly
    }

    // calculation part
    for (let i = 0; i < k; i++) {
        windows += nums[i];
    }
    
    maxSum = windows
    // sliding part
    for (let i = k; i < nums.length; i++) {
        windows = windows - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windows);
    }
    
    return maxSum / k;
};



  /**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let chunked = []

       for(let i = 0; i < arr.length; i++){
           chunked.push(arr.splice(0,size))
           i--;
       }
return chunked

};




  //pascal
  /**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
let pascal = [];

  for(let i = 0; i < numRows; i++){
    let row = [];

    for(let j = 0; j <= i; j++){
      if(j === 0 || j === i){
         row.push(1)
      }else{
        row.push(pascal[i - 1][j - 1] + pascal[i - 1][j])
      }
    }
    pascal.push(row)
  }
return pascal
};



  /**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let con = []
    let bigCon = 0
    let count = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
            bigCon = Math.max(count,bigCon)
        }else{
            count = 0
        }
        con.push(count)
    }
    // console.log(con)
     return bigCon
    // return Math.max(...con)

};




    // Check if all values from 1 to max are present without gaps
    for (let i = 1; i <= max; i++) {
        if (!nums.includes(i)) {
            return false; // Value i is missing
        }
    }


  /**
 * @param {number[]} nums
 * @return {boolean}
 */



  
var isGood = function(nums) {
    let max = Math.max(...nums)
    let s = nums.sort((a,b) => a - b)
    let curr = 0;
    


    for(let i = 1; i <= max; i++){
        if(s[i - 1] !== i){
            return false
        }
    }

    for(let n of nums){
        if(n === max){
            curr++;
        }
    }
    
    if(curr === 2){
        return true;
    }else{
        return false
    }

};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
     
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 0; j < nums.length -i - 1; j++){
          if(nums[j] > nums[j + 1]){
              temp = nums[j]
              nums[j] = nums[j + 1]
              nums[j + 1] = temp
          }
        }
    }
    console.log(nums)
};




  /*
  QUICK SORT BETTER THAN BUBBLE SORT
  function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((el) => el < pivot);
  const middle = arr.filter((el) => el === pivot);
  const right = arr.filter((el) => el > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage:
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArr = quickSort(arr);
console.log(sortedArr); // Output: [1, 1, 2, 3, 6, 8, 10]


  */







  /**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let count =  {}
    let counter = 0;

    for(n of nums){
      if(count[n]){
          count[n] += 1
      }else{
          count[n] = 1
      }

    }
    for(let key in count){
       key = parseInt(key) //cevirmek lazim 

       if(count[key + 1]){
           let length = count[key] + count[key + 1]
           counter = Math.max(length, counter)
       }
    }
    return counter
};





  /**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

var findRestaurant = function(list1, list2) {
        let collect = []
        let minSum = Infinity;


        for(let i = 0; i < list1.length; i++){
            for(let j = 0; j < list2.length; j++){
                if(list1[i] === list2[j]){
                    let currentSum = i + j
                    minSum = Math.min(currentSum, minSum)
                }
            }
        }

        for(let i = 0;i < list1.length; i++){
            for(let j = 0; j < list2.length; j++){
                if(list1[i] === list2[j] && i+j === minSum){
                    collect.push(list1[i])
                }
            }
        }
 return collect

};




  /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
     let count = {}

     for(let i = 0; i < nums.length; i++){
         let num = nums[i]
         
         if(num in count && i - count[num] <= k){
             return true
         }

         count[num] = i
     }
     return false


    };



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

   let tp = t.split("").sort()
   let sp = s.split("").sort()
   
   let result = tp.length === sp.length && tp.every((v,i) => v === sp[i])
  return result
    
};

  //hash table

  /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let ss = s.split("").sort()
    let st = t.split("").sort()
    let count1 = {}
    let count2 = {}

    if(st.length != ss.length) return false

    for(let i of ss){
        if(count1[i]){
            count1[i] += 1
        }else{
            count1[i] = 1
        }
    }

    for(let j of st){
        if(count2[j]){
            count2[j] += 1
        }else{
            count2[j] = 1
        }
    }
  

for (let key in count2) {
    if (!count1.hasOwnProperty(key) || count1[key] !== count2[key]) {
        return false;
    }
}





  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0;
    let j  = nums.length -1
    let count = [-1,-1]
while (i <= j) {

    if(nums[i] === target && count[0] === -1){
        count[0] = i
    }

    if(nums[j] === target && count[1] === -1){
        count[1] = j
    }

    if(nums[i] !== target){
        i++
    }
    if(nums[j] !== target){
        j--
    }

    if(count[0] !== -1 && count[1] !== -1){
        break
    }
     
    }
    return count

};




  /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let empty = ''
    if(haystack.length < needle.length){
        return -1
    }

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            empty = haystack.substring(i, i + needle.length)
            if(empty === needle){
                return i
            }
        }
    }
return -1
};



  /**
 * @param {number[]} nums
 * @return {number}
 */


var pivotIndex = function(nums) {
    let left = 0
    let right = nums.reduce((a,b) => a + b)
   

    for(let i = 0; i < nums.length; i++){
        right = right - nums[i]
        if(left === right){
            return i 
        }else{
            left = left + nums[i]
        }
        
    }
 return -1
};





  /**
 * @param {string} columnTitle
 * @return {number}
 */

 // s = 0
 // s = s * 26 + i
        
var titleToNumber = function(columnTitle) {
    let sum = 0;

    for(let i = 0; i < columnTitle.length; i++){
        let char = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1
        sum = sum * 26 + char
    }
 return sum

};





  /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
     let sum = 0;
     let seen = new Set();

     while(sum !== 1 && !seen.has(n)){
         seen.add(n)
         let digits = n.toString().split("").map(Number)
         sum = digits.reduce((a,b) => {
             a += Math.pow(b , 2)
             return a
         },0)
         n = sum
     }

    return sum === 1 ? true : false
};





  /**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0;


    if(num <= 9) return num



    while(num > 9){
        let digits = num.toString().split("").map(Number)
        sum = digits.reduce((a,b) => {
           return a + b
        }, 0)
       num = sum
    }
  return sum  
};







  /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    if(s.length !== t.length) return false
    
    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++){
        let sChar = s[i]
        let tChar = t[i]

        if(sMap[sChar] === undefined && tMap[tChar] === undefined){
         //burda bir nevi char degistirme gibi atama yapiyoruz
           sMap[sChar] = tChar
           tMap[tChar] = sChar
        } 
        //burda da dogru atanmis mi diye kontrol ediyoruz

        if(sMap[sChar] !== tChar || tMap[tChar] !== sChar){
            return false
        }
    }
return true

};


  /**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   let sMap = new Map()
   let pMap = new Map()
   let str = s.split(" ")
   let ptr = pattern.split("")
       
   if(str.length !== ptr.length) return false


        for(let i = 0; i < str.length; i++){
            let sChr = str[i]
            let pChr = ptr[i]

            if(!sMap.has(sChr) && !pMap.has(pChr)){
                sMap.set(sChr, pChr)
                pMap.set(pChr, sChr)
            }else if(sMap.get(sChr )!== pChr || pMap.get(pChr) !== sChr){
                return false
            }
        }

        return true

};






  /**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {}

    for(let num of nums){
    if(count[num]){
        count[num]++
    }else{
        count[num] = 1
    }

    }
  
  for(const [key,value] of Object.entries(count)){
      if(value % 2 != 0){
        return key
      }
        
  }
};



  /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let left = 0;
    let right = 1


    while(right < prices.length){
     if(prices[right] > prices[left]){ 
       let current = prices[right] - prices[left]
       sum = Math.max(sum,current)
     }else{
       left = right
     }    
     right++
    
 }
      return sum
    }



  /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {}

    for(i of s){
        if(count[i]){
            count[i]++
        }else{
            count[i] = 1
        }
    }

   for(let [key,value] of Object.entries(count)){
       if(value === 1){
         return s.indexOf(key)
       }
    
   }

return - 1
};





  /**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  let count = {};

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
        return s[i]
        }
        else{
            count[s[i]] = 1
        }
    }

    return count;
}





  /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 //sliding window
var maxVowels = function(s, k) {
    let vowels = ['a','e','i','o','u']
    let temp = 0;
    let count = 0;

    for(let i = 0; i < k; i++){
        if(vowels.includes(s[i])){
            temp++
        }

    }
        count = temp

        for(let i = k; i < s.length;i++){
            if(vowels.includes(s[i])){   //bastan
                temp++
            }

            if(vowels.includes(s[i-k])){     //sondan
                temp--
            }
            count = Math.max(temp,count)
        }
        

   return count
    }

 

  

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

      let result1 = []
      let result2 = []

      for(let num of [...set1, ...set2]){
          if(!set1.has(num)){
              result2.push(num)
          }
          if(!set2.has(num)){
              result1.push(num)
          }
      }
      return [result1, result2]
}

  






  /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let l = 0;
    let r = 0;
    let max = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            count++

            while(count > k){
                if(nums[r] === 0){
                  count--
                }
                r++
            }

        }
                 max = Math.max(max, i - r+1)


    }
return max
    
};


  /**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let d1 = Infinity
    let d2 = Infinity
    let d3 = Infinity

    for(let num of nums){
        if(num <= d1){
            d1 = num
        }else if(num <= d2){
            d2 = num
        }else{
            d3 = num
            if(d3 > d2){
                return true
            }
        }
   
    }

 return false
};
