// fibonacci sequence;
// problem: by giving n, give me first n from fibonacci sequence;
// hint: every element in fibonacci sequence is sum of the two previous elements and so on... 
// fib(0) = 0; fib(1) = 1; fib[n] = fib[n-1] + fib[n-2];

function fib(n) { 
    let fib = [0, 1];
    if (n === 0) {
        return fib[0]; // 0
    } else if ( n === 1) {
        return fib[1]; // 1
    } else {
        for(i = 2; i < n; i ++ ){
            fib[i] = fib[i-1] + fib[i-2] //n
        }
        return fib
    }
}

console.log(fib(3)) // [ 0, 1, 1]
console.log(fib(4)) // [ 0, 1, 1, 2]
console.log(fib(5)) // [ 0, 1, 1, 2, 3]
console.log(fib(6)) // [ 0, 1, 1, 2, 3, 6]

// big_O = O(n) + O(1) + O(0) = O(n)
