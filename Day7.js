//Array Reduce Transformation
var reduce = function(nums, fn, init) {

    // Start with the initial value
    let result = init;

    // Process each element sequentially
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    // Return the final accumulated value
    return result;
};