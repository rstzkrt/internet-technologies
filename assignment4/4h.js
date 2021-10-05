function secondLowestAndGreatest(nums) {
    nums.sort(function(a, b) {
    return b - a;
    });
    console.log(nums[nums.length-2],nums[1]);//secondLowest,secondGreatest
}
secondLowestAndGreatest([1,2,3,4,5]);
