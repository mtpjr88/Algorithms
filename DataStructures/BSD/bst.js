function binarySearch (arr, itemSearch) {
  let left = 0;
  let right = arr.length-1;
  let midPoint;
    while(left <= right) {
      midPoint = (left + right) / 2;
      if(itemSearch < arr[midPoint]) right = midPoint-1;
      else if(itemSearch > arr[midPoint]) left = midPoint+1;
      else return midPoint;
    }
  return -1;

}

console.log(binarySearch([1,2,3,4,5,6,7], 2));

//[][][][][][][][]][][][][]
