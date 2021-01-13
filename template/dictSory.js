var dict = {
	x: 1,
	y: 6,
	z: 9,
	a: 5,
	b: 7,
	c: 11,
	d: 17,
	t: 3,
};

// Create items array
var items = Object.keys(dict).map(function (key) {
	return [key, dict[key]];
});

// Sort the array based on the second element
items.sort(function (first, second) {
	return second[1] - first[1];
});

// Create a new array with only the first 5 items
console.log(items.slice(0, 5));
