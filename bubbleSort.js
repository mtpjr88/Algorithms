//Bubble sort
// From my video
function bubbleSort(arr){
  let len = arr.length;
  let i,j,temp;
  for(i = len; i > 0; i--) {
    for(j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4,5,1,7,9,8,6,10]));

// ****************
//******Another way to do it************* */

 function bubbleSort (array) {
  let len = array.length;
  let swapped;
    for(let i = len; i >= 0; i--){
      for(let j = 1; j<= i; j++){
        if(array[j-1] > array[j]){
          swapped = array[j-1];
          array[j-1] = array[j];
          array[j] = swapped;
        }
      }
    } return array;
}

console.log(bubbleSort([5,4,3,2,1]));
