/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // Edge case: empty array returns identity function
    if (functions.length === 0) {
        return function(x) { return x; };
    }
    
    // Return a function that applies all functions from right to left
    return function(x) {
        let result = x;
        // Apply functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
};

/**
 * const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
 * console.log(fn(4)); // 65
 */