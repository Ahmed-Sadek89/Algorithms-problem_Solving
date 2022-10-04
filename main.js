// factioral
// 1! || 0! =1
// 3!=6
// 4!=24
// 5!=120
function fact(n) {
    if ( n <= 1 ) {
        return 1
    } else {
        let res = n;
        for(let i = (n -1 ); i >= 1 ; i--) {
            res = res * i
        }
        return res
    }
}

console.log(fact(5))