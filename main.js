function binary_search(key, array) {
    return search(key, array, 0, array.length - 1);
}

function search(key, array, left, right) {
    if(left > right) {
        return -1 // O(1)
    }
    let middle = Math.floor((left + right) / 2);

    if( key === array[middle] ) {
        return middle; // O(1)
    } else if ( key < array[middle] ) {
        return search(key, array, left, middle - 1) // O(logn)
    } else {
        return search(key, array, middle + 1, right)// O(logn)
    }
}

console.log(binary_search(2, [1,2,3,4])) //  search from one side of array => O(log(n))
