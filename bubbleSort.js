//Bubble sort
// From my video
function bubbleSort1(arr){
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
/************************************** */


// // ****************
// //******Another way to do it************* */

 function bubbleSort2 (array) {
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

// console.log(bubbleSort([5,4,3,2,1]));

// TODO implement using functional methods: map filter reduce


function bubbleSort3 (arr) {
  let swapped;
  for (let left=0; left<arr.length; left++) {
    for (let right=arr.length-1; right>=left; right--) {
      if (arr[left] > arr[right]){
        swapped = arr[right];
        arr[right] = arr[left];
        arr[left] = swapped;
      }
    }
  }
return arr;
}
