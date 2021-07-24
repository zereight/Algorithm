const Dec2BinString = (num) => {
  return Number(num).toString(2);
};

const binString2Dec = (binString) => {
  return parseInt(binString, 2);
};

console.log(Dec2BinString(10));
console.log(binString2Dec("1010"));
