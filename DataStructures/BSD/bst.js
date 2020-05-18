/** Returns items index*/
function binarySearch(target, arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (target < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}
/*
                                  [1,2,3,4,5,6,7,8,9,10]
                                   ^             ^            ^
                                start        mid        end
 
                  if target < mid point ( if target were 2 )
                    move end to mid - 1 and viseversa

                        [1,    2,     3,    4,    5]
                        ^             ^            ^
                      start        mid        end

 */
console.log(binarySearch(11, [3, 4, 5, 6, 7, 8, 9, 10]));
