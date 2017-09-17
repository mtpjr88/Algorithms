function sort(arr) {
    let len = arr.length;
    let swapped;
     for(let i = len; i >=0; i--) {
       for(let j = 1; j<=i;j++) {
        if(arr[j-1] > arr[j]){
         swapped = arr[j-1];
         arr[j-1] = arr[j];
         arr[j] = swapped;
        }
       }
     }
     return arr;
   }
   
   console.log(sort([3,7,8,3,2,6,34,12,-1,5,-22]));