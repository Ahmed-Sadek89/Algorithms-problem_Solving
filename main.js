function bubble_sort(array) {
    // key =>  for swapping between two index
    // numberOfSwapping =>  counting the swapping number
    // numberOfLooping => for counting the number of loops in the array, 

    let key = 0, numberOfLooping = 0, numberOfSwapping;

    while( numberOfSwapping !== 0 ) { // n

        numberOfSwapping = 0; // firstly, this must be 0.
        numberOfLooping++ //if is 1, that mean the elements are already sorted sorted. 

        for( let i = 0; i < array.length; i++ ) { // n
            if(array[i] > array[i+1] ) {
                key = array[i];
                array[i] = array[i+1];
                array[i+1] = key;
                numberOfSwapping++ // increase it, if array[i] > array[i+1]
            } else {
                continue;
            }
        }
        console.log(numberOfLooping)
    }

    return array
}

console.log(bubble_sort([3,1,2,-10,4])) // O(n^2)