// IN THIS QUESTION YOU HAVE TO FIND THE Smallest ELEMENT IN THE ARRAY BUT USING THE BINARY SEARCH APPROACH

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0
    let end = arr.length - 1
    let   mid;
    while(start < end)
    {
        mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[start]){
                start = mid +1
        }
        else{
                end = mid 
        }
        
    }
    return start 
};



arr = [7,9,1,2,3]

console.log(peakIndexInMountainArray(arr));