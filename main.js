function merge_sort(array) {
    if (array.length < 2) { 
        return array
    }
    let middle = Math.floor(array.length / 2);
    let leftArray = array.slice(0, middle); // logn
    let rightArray = array.slice(middle); // logn
    return merging(merge_sort(leftArray), merge_sort(rightArray));
}

function merging(leftArray, rightArray) {
    const sorted = [] ;
    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]){
            sorted.push(leftArray.shift())
        } else {
            sorted.push(rightArray.shift())
        }
    }
    return [...sorted, ...leftArray, ...rightArray]
}

let arr = [5,3,7,4,1,2,6]
console.log(merge_sort(arr)) // O(nlog(n))