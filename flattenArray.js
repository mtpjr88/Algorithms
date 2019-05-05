function flatten(arr) {
	let flat = [];
	for (let i of arr) {
		!Array.isArray(i)
			? (flat = [...flat, i])
			: (flat = [...flat, ...flatten(i)]);
	}
	return flat;
}

console.log(flatten([1, [2, 3], [6, 3, [3, [4]]], 2, 4, 5]));
