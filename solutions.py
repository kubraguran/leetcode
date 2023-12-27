class Solution(object):
    def twoSum(self, nums, target):
        x = len(nums)
        result = None

        for n in range(0, x):
            for m in range(n + 1, x):
                if nums[n] + nums[m] == target:
                    result =  [n , m]

        return result


class Solution(object):
    def isPalindrome(self, x):
       string = str(x)[::-1]
       result = True if str(x) == string else False
       return result
       
     
     


class Solution(object):
    def arrayPairSum(self, nums):
         
        sum = 0
        sorts = sorted(nums)
        
        for n in range(0, len(sorts), 2):
            sum += sorts[n]


        return sum





class Solution(object):
    def containsDuplicate(self, nums):
     count = {}

     for num in nums:
        if num in count:
            count[num] += 1
        else:
            count[num] = 1

    #  print(count)

     for key,value in count.items():
        if value >= 2:
            return True;

     return False 





class Solution(object):
    def containsNearbyDuplicate(self, nums, k):

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j] and abs(j - i) <= k:
                    return True
                
        return False
                   
                
        
   

        class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        count = {}

        for i in range(len(nums)):
            num = nums[i]

            if(num in count and i - count[num] <= k):
                return True

            
            count[num] = i

        return False




    

        
        class Solution(object):
    def isAnagram(self, s, t):
       sp = sorted(list(s))
       tp = sorted(list(t))

       if len(tp) != len(sp):
          return False

       for i in range(len(tp)):
          if sp[i] != tp[i]:
             return False

         
       return True
          


class Solution(object):
    def twoSum(self, nums, target):
        sum = []

        for i  in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    sum.append(i)
                    sum.append(j)

        return sum


 #hash table version
        
class Solution(object):
    def isAnagram(self, s, t):
        count1 = {}
        count2 = {}

        if len(t) != len(s):
          return False

        for i in s:
            if i in count1:
                count1[i] += 1
            else:
                count1[i] = 1

      

        for j in t:
            if j in count2:
                count2[j] += 1
            else:
                count2[j] = 1  


        for key in count2:
            if key not in count1 or count1[key] != count2[key]:
                return False

        return True
    
          


class Solution(object):
    def strStr(self, haystack, needle):
        empty = ''

        if len(haystack) < len(needle):
            return -1

        for i in range(0, len(haystack)):
            if(haystack[i] == needle[0]):
                empty = haystack[i:i+len(needle)]
                if empty == needle:
                    return i

        return -1





class Solution(object):
    def searchInsert(self, nums, target):
        l,r = 0, len(nums) - 1

        while(l <= r):
            mid = ((l+r) // 2)

            if nums[mid] == target:
                return mid

            if nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1

        return l







class Solution(object):
    def pivotIndex(self, nums):

        left = 0;
        right = sum(nums)

        for i in range(0, len(nums)):
            right = right - nums[i]
            if(right == left):
                return i
            else:
                left = left + nums[i]


        return -1






class Solution(object):
    def findMiddleIndex(self, nums):

        left = 0
        right = sum(nums)

        for i in range(0, len(nums)):
            right = right - nums[i]

            if(left == right):
                if(i != 0):
                    return i
                else:
                    return 0
            else:
                left = left + nums[i]
        return -1





class Solution(object):
    def titleToNumber(self, columnTitle):
        sum = 0

        for i in range(len(columnTitle)):
            char = ord(columnTitle[i]) - ord('A') + 1
            sum = sum * 26 + char

        return sum




class Solution(object):
    def addDigits(self, num):
      

        if num <= 9 :
            return num

        while num > 9:
             s = str(num)
             digits = list(map(int, s))
             num = reduce(lambda a,b: a+b, digits) 
        return num


             

class Solution(object):
    def isIsomorphic(self, s, t):
        sMap = {}
        tMap = {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            sChr = s[i]
            tChr = t[i]

            if sMap.get(sChr) is None and tMap.get(tChr) is None:
                sMap[sChr] = tChr
                tMap[tChr] = sChr

            if sMap.get(sChr) != tChr or tMap.get(tChr) != sChr:
                return False
        
        return True
        




class Solution(object):
    def isHappy(n):
        find = set()
        sum = 0

        while sum != 1 and n not in find:
            find.add(n)
            digits = [int(digit) for digit in str(n)]
            sum = sum([digit ** 2 for digit in digits])
            n = sum

        return sum == 1


       
#selection sort

class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        
        for i in range(len(nums) - 1):
            mn = i
            
            for j in range(i+1, len(nums)):
                if nums[j] < nums[mn]:
                    mn = j
                    
                    
            temp = nums[i]
            nums[i] = nums[mn]
            nums[mn] = temp
            
        
        return nums





class Solution:
    def diagonalPrime(self, nums: List[List[int]]) -> int:

        sum = []
        
        for n in range(len(nums)):
            for m in range(len(nums[n])):
                if n == m or n + m == len(nums) - 1:
                    num = nums[n][m]
                    isPrime = True

                    if num <= 1:
                        isPrime = False
                    else:
                        for k in range(2, int(num**0.5) + 1):
                            if num % k  == 0:
                                isPrime = False
                                break



                    if isPrime:
                        sum.append(num)



        if sum:
            return max(sum)
        else:
            return 0


                                
        
        


        

