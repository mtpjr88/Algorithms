function quickSort(arr) {
	if (arr.length < 2) return arr;

	let min = [];
	let max = [];
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex];
	for (let i in arr) {
		if (i != pivotIndex) {
			if (arr[i] > pivot) {
				max.push(arr[i]);
			} else min.push(arr[i]);
		}
	}

	return [...quickSort(min), pivot, ...quickSort(max)];
}
