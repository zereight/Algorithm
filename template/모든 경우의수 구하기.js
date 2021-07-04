const subsets = (array) => array.reduce((acc, cur) => [...acc, ...acc.map((v) => [...v, cur])], [[]]);

console.log(subsets(['a', 'b', 'c']));
