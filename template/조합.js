const getCombination = (arr, n) => {
  const result = [];
  if (n === 1) return arr.map((e) => [e]);
  arr.forEach((e, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, n - 1);
    const attached = combinations.map((combi) => [e, ...combi]);
    result.push(...attached);
  });
  return result;
};
