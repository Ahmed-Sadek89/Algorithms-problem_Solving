function linear_search(key, array) {
    for( let i = 0; i < array.length; i++ ) {
        if ( array[i] === key ) {
            return `found in index: ${i}`;
        }else {
            continue;
        }
    }
    return 'your key is not found';
}

console.log(linear_search(3, [1,2,3,4]))