function createCounter(n) {
    // let count = n;
    return function() {
        return n++;  
    };
}

// Example usage:
// let n = 10;
// let counter = createCounter(n);
// console.log(counter());  // Output: 10
// console.log(counter());  // Output: 11
// console.log(counter());  // Output: 12