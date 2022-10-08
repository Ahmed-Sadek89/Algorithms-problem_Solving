function quick_sort(array) {
    if( array.length < 2 ) {
        return array
    }
    let pivot = array[array.length-1];
    let left = [];
    let right = []
    for( let i = 0; i < array.length -1 ; i++ ){
        if(array[i] < pivot ) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}
let arr = [2,1,7,8,3,5,6,4,6]
console.log(quick_sort(arr))