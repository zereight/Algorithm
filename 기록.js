function solution(passwords, s) {
  const info = passwords.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];

    return acc;
  }, {});

  const steps = s.split("#");
  steps.pop();
  // console.log(info);
  // console.log(steps);
  let count = 0;
  let isValidHouseNumber = false;
  let isValidPassword = false;

  steps.forEach((step, index) => {
    if (isValidHouseNumber) {
      if (!isValidPassword) {
        // console.log("호수는 맞으나 비밀번호가 틀림");
        isValidHouseNumber = false;
      } else {
        // console.log("호수도 맞고 비밀번호도 맞음 열림");
        count++;
        isValidHouseNumber = false;
        isValidPassword = false;
      }
    } else {
      if (info[step]) {
        // console.log("호수가 맞음!");
        isValidHouseNumber = true;

        if (`${info[step]}` === steps[index + 1]) {
          isValidPassword = true;
        }
      }
    }
  });

  return count;
}

console.log(
  solution(
    [
      [101, 1234],
      [102, 54321],
      [201, 202],
      [202, 1],
    ],
    "101#1234#102#654321#51#203#201#202#1#"
  )
);
console.log(
  solution(
    [
      [101, 9999],
      [102, 1111],
    ],
    "201#9999#101#"
  )
);
console.log(
  solution(
    [
      [101, 9999],
      [102, 1111],
    ],
    "101#9999#102#1111#101#9999#101#9999#"
  )
);

///

function replaceAll(str, from) {
  return str.split(from).join("");
}

function solution(codes) {
  const answer = [];
  const block = {};
  Array.from({ length: 30 }, (_, index) => (block[index + 1] = {}));

  let maxDepth = 1;
  let currDepth = 1;

  codes.forEach((code) => {
    // console.log("maxDepth", maxDepth);
    let pointCount = Array.from(code).filter((chr) => chr === ".").length;

    if (pointCount === 0) {
      pointCount = 1;
    }

    if (maxDepth < pointCount) {
      if (!code.includes("print")) {
        maxDepth = maxDepth + 1;
      }
      currDepth = maxDepth;
    } else if (maxDepth > pointCount) {
      block[maxDepth] = {};
      maxDepth = maxDepth - 1;
      currDepth = pointCount;
    } else {
      currDepth = maxDepth;
    }

    const _code = replaceAll(code, ".");

    if (_code.includes("print")) {
      const target = _code.split(" ")[1];
      let _currDepth = currDepth;
      while (block[_currDepth][target] === undefined) {
        _currDepth--;
        if (_currDepth === 0) {
          break;
        }
      }

      const value =
        _currDepth === 0 ? "error" : `${target}=${block[_currDepth][target]}`;

      // console.log(currDepth, `${value}`);
      answer.push(`${value}`);
    } else {
      const [left, right] = _code.split("=");
      block[currDepth][left] = right;
    }
  });

  return answer;
}

console.log(
  solution([
    "a=3",
    "..a=4",
    "..b=3",
    "..print a",
    ".......a=6",
    ".......print a",
    ".......print b",
    "..print a",
    "....a=7",
    "....print a",
    "print a",
    "print b",
    "a=4",
    "print a",
    "...print a",
  ])
);

///

const findMin = function (array) {
  return array.reduce((a, b) => Math.min(a, b));
};

function preprocessing(arr) {
  const min = findMin(arr);

  const arrExclusiveMinimum = `+${arr.join("+")}`
    .split(`+${min}`)
    .filter((s) => s.length)
    .map((s) => s.split("+").filter((s) => s.length > 0));

  const isMinValueZero = min === 0;

  return [arrExclusiveMinimum, isMinValueZero];
}

function solution(arr) {
  let answer = 0;

  let arrSets = [arr];

  function processing(arrSets) {
    arrSets.forEach((_arrSet) => {
      const [__arrSets, isMinValueZero] = preprocessing(_arrSet);
      if (!isMinValueZero) answer++;

      processing(__arrSets);
    });
  }

  processing(arrSets);

  return answer;
}

console.log(solution([1, 2, 4, 8, 4, 2, 1]));
console.log(solution([1, 3, 5, 7, 6, 8, 9, 5, 1]));
console.log(solution([10, 0, 10, 0, 10, 0]));
console.log(solution([5, 4, 5, 4, 5, 5]));

1 3 5 7 6 8 9 5 1

1 3

5 4 5 4 5 5 이면

[5] 4 머리잘려서
[4] 현재 카운팅 1

[4] 5들어와서 유지해서
[4 5]

[4 5] 4 머리잘려서
[4 4] 현재 카운팅 2
[4 4] 합쳐서 [4]

[4] 5들어와서 유지해서
[4 5]

[4 5] 5들어와서 유지해서
[4 5 5]
[5 5]합쳐서 [4 5]

[4 5] 이렇게 2개남음




10 1 10 1 10 0이면

[10]에서 0들어와서 머리자르고 +1
[10] 현재 카운팅 1

[10]에서 10 들어와서 유지
[10 10]

[10 10] 합침
[10]

[10]에서 0들어와서 머리자르고 +1
[10] 현재 카운팅 2

[10]에서 10들어와서 유지
[10 10]

[10 10]합침
[10]

[10]에서 0들어와서 머리자르고 +1
[10] 현재카운팅 3






+3
