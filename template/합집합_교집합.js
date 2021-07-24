const getIntersection = (_setA, _setB) => {
  const setA = [..._setA];
  const setB = [..._setB];

  const intersectionSet = [];

  for (const aElem of setA) {
    if (setB.includes(aElem)) {
      setB.splice(setB.indexOf(aElem), 1);
      intersectionSet.push(aElem);
    }
  }

  return intersectionSet;
};
