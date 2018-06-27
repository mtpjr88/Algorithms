// *********** Selection Sort ************
// How does it works:
// Go through the array,find the index of the lowest element,
// swap the lowest element with the first element.
// Now first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element)
// and find the index of the lowest and swap it with the second element.
// thats how it continues to select (find out) the lowest element of the
// array and putting it on the left until it hits the last element.

// ArrayValue    [3] [4] [1] [6] [8] [4] [6] --
// IndexPosition  0   1   2   3   4   5   6  --i

// function selectionSort(arr) {
//   let len = arr.length;
//   let i,j,min;

//   for(i=0;i<len-1;i++){ //Outer loop
//     min=i;              // make i position the min Position
//     for(j=i+1;j<len;j++){ // inner loop, one above i to compare
//       if(arr[j] < arr[min]){ // compare if ar index j is less than index min or i
//         min = j; // if it is than store j as the new minimum index
//       }
//     }// Swap the positions
//     let temp = arr[i]; //store index arr[i] in temp
//     arr[i] = arr[min]; //  store arr[min] inside arr[i]
//     arr[min] = temp;   // store temp which is arr[i] inside arr[min]
//   }
//   return arr;
// }

//   console.log(selectionSort([3,4,1,5,8,9,2,6,7]));

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

console.log(sort([3, 7, 10, 2, 7, 9, 34, 177]));
