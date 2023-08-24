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


        
