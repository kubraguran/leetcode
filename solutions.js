
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


  
