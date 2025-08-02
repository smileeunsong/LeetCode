function runningSum(nums: number[]): number[] {
    let sum = 0
    let res = []
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        res.push(sum)
    }
    return res
};