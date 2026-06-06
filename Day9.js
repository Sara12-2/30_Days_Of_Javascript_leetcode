//Return Length of Arguments Passed


function argumentsLength(...args) {
    return args.length;
}

// Test cases
console.log(argumentsLength(5)); // 1
console.log(argumentsLength(5, 10, 15)); // 3
console.log(argumentsLength("a", "b", "c", "d")); // 4
console.log(argumentsLength({}, null, "hello", 42, [1,2,3])); // 5
console.log(argumentsLength()); // 0