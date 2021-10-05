function binarySearch(value,arr){
    let start=0, end=arr.length-1;

    while (start<=end){
        let mid=Math.floor((start + end)/2);

        if (arr[mid]===value) return true;

        else if (arr[mid] < value)
            start = mid + 1;//right
        else
            end = mid - 1;//left
    }
    return false;
}

console.log(binarySearch(2,[1,2,3,4,5,6,7]))