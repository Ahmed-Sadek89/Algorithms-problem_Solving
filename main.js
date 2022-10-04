//////              HERE THERE ARE MANY SOLUTIONS, BUT WE WANT THE (OPTIMAL ONE)

// determine if the number is prime or not

// function prime1(n) {
//     let isPrime = '';
//     if(n > 1) {
//         let res = 1
//         prime :
//         for(let i = 1; i < n; i++ ) {
//             for(let j = 1; j < n; j++ ) {
//                 console.log(`${i} * ${j} = ${n}`)
//                 res = i * j
//                 if(res === n) {
//                     console.log(res)
//                     isPrime = 'this is not prime'
//                     break prime
//                 } else {
//                     isPrime = 'this is prime'
//                 }
//             }  
//         }
//     } else {
//         isPrime = 'element less than or eql 1 is not prime'
//     }
//     return isPrime
// }

// console.log(prime1(2)) // big O = O(n^2)

//// THIS ANOVE IS NOT OPTIMAL SOLUTION


// function prime2(n) {
//     if (n > 2) {
//         for(let i = 2; i < n; i++ ) {
//             console.log(i)
//             if ( n%i === 0 ) {
//                 return 'is not prime'
//             }
//         } 
//     } else {
//         return 'is prime'
//     }
//     return 'is prime'
// }

// console.log(prime2(4)) // O(n)

// //// ALSO, THIS ABOVE IS NOT OPTIMAL SOLUTION

function prime2(n) {
    if (n > 2) {
        for(let i = 2; i < Math.sqrt(n); i++ ) {
            console.log(i)
            if ( n%i === 0 ) {
                return 'is not prime'
            }
        } 
    } else {
        return 'is prime'
    }
    return 'is prime'
}

console.log(prime2(4)) // O(sqrt(n))

///// HERE, THIS ABOVE IS OPTIMAL SOLUTION