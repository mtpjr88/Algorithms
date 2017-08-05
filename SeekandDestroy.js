   // Seek and Destroy
  // You will be provided with an initial array (the first argument in the destroyer function), 
 //followed by one or more arguments. Remove all elements from the initial 
// array that are of the same value as these arguments.

function destroyer(arr) {
  var args = Array.from(arguments);             // converts arguments to array
  var len = arr.length;
  for(var i = 0; i < len; i++){               // iterate through first arguments array
    for(var j = 0; j < args.length; j++){    //iterate through 2nd arguments
      if(arr[i] == args[j]){                // compare the values
        delete arr[i];                     // delete the the items that match
      }
    }
  }
  return arr.filter(Boolean);           // return as Boolean to filter 'falsey values'
}                                       // otherwise will return null,null,null

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
