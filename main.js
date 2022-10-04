// power of two 
// give n, if n === x^(any value) => that mean that the number is power of two;
// ex => 8 = 2^(3)
// ex => 9 !=2^(any value)


// function isPowerOfTwo(n) {
//     let res = 1;
//     for ( let i = 0; i < n; i++ ) {
//         res = Math.pow(2, i);
//         console.log(res)
//         if ( res < n ) {
//             continue;
//         } else if (res === n) {
//             return 'this element is power of two';
//         } else {
//             return 'this element is not power of two'
//         }
//     }
//     return 'this element is not power of two'
// }

// console.log(isPowerOfTwo(8)) // O(n)


function isPowerOfTwo(n) {
    if ( n < 1 ) {
        return false;
    } else {
        while (n > 1) {
            if (n%2 !== 0 ) {
                return false
            }
            n = n/2
        }
    }
    return true
}

console.log(isPowerOfTwo(8))// O(log(n))