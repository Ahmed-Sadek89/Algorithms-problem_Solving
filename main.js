function insertion_sort(array) {
    let key;
    for( let i = 1; i < array.length; i++ ) {
        key = array[i]
        j = i - 1;
        while( j > -1 && array[j] > key ) { // case if array[j] > key
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = key // case if array[j] !> key
    }

    return array;
}

console.log(insertion_sort([-6, 20, 8, -2, 4]))

// best case O(n)
// worst case O(n^2) => array is sorted desc