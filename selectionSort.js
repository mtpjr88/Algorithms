// *********** Selection Sort ************
// How does it works:
// Go through the array,find the index of the lowest element,
// swap the lowest element with the first element.
// Now first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element) 
// and find the index of the lowest and swap it with the second element.
// thats how it continues to select (find out) the lowest element of the 
// array and putting it on the left until it hits the last element.

function selectionSort(arr) {
    let minIndex, temp,
        len = arr.length;

        for(let i = 0; i < len; i++) {
            minIndex = i;
            for(let j = i+1; j)
        }
    
    return arr;
}