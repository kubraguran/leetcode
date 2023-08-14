class Solution(object):
    def twoSum(self, nums, target):
        x = len(nums)
        result = None

        for n in range(0, x):
            for m in range(n + 1, x):
                if nums[n] + nums[m] == target:
                    result =  [n , m]

        return result
