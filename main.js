function binary_search(key, array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while( leftIndex <= rightIndex ) {
        let middle = Math.floor((leftIndex + rightIndex) / 2);
        if( key === array[middle] ){
            return middle
        } else if ( key <= array[middle] ) {
            rightIndex = middle - 1
        } else {
            leftIndex = middle + 1
        }
    }
    return -1
}

console.log(binary_search(2, [1,2,3,4])) //  search from one side of array => O(log(n))
