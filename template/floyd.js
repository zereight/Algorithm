function make2DArray(rows, cols, initialValue) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => initialValue)
  );
}

function 플로이드_와샬(지점개수, 경로정보) {
  const matrix = make2DArray(지점개수, 지점개수, Infinity);

  for (let i = 0; i < 지점개수; i++) {
    for (const [dest, cost] of 경로정보[i] || []) {
      matrix[i][dest] = cost;
      matrix[dest][i] = cost;
    }
    matrix[i][i] = 0;
  }

  for (let k = 0; k < 지점개수; k++) {
    for (let i = 0; i < 지점개수; i++) {
      if (k === i) continue;
      for (let j = 0; j < 지점개수; j++) {
        if (k === j) continue;
        if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }

  return matrix;
}

function solution(지점개수, _출발지점, _A목적지, _B목적지, fares) {
  const [출발지점, A목적지, B목적지] = [
    _출발지점 - 1,
    _A목적지 - 1,
    _B목적지 - 1,
  ];

  const 경로정보 = fares.reduce((acc, fare) => {
    const [_start, _end, cost] = fare;

    const [start, end] = [_start - 1, _end - 1];

    acc[start] = acc[start] || [];
    acc[start] && acc[start].push([end, cost]);

    acc[end] = acc[end] || [];
    acc[end] && acc[end].push([start, cost]);

    return acc;
  }, {});

  const 플로이드_테이블 = 플로이드_와샬(지점개수, 경로정보);

  const 출발지점으로부터_i까지함께갔을때_최소비용 = 플로이드_테이블[출발지점];
  const i지점에서_AB따로_갔을때_최소비용 = Array.from(
    { length: 지점개수 },
    (_, i) => 플로이드_테이블[i][A목적지] + 플로이드_테이블[i][B목적지]
  );

  let 함께가다가_찢어져서_갈때의_최소비용 = Infinity;

  for (let i = 0; i < 지점개수; i++) {
    함께가다가_찢어져서_갈때의_최소비용 = Math.min(
      함께가다가_찢어져서_갈때의_최소비용,
      출발지점으로부터_i까지함께갔을때_최소비용[i] +
        i지점에서_AB따로_갔을때_최소비용[i]
    );
  }

  return 함께가다가_찢어져서_갈때의_최소비용;
}

const readline = require("readline");
const { info } = require("console");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = function (input) {
  const [V, E] = input
    .shift()
    .split(" ")
    .map((e) => parseInt(e));
  const matrix = Array.from({ length: V + 1 }, () =>
    Array.from({ length: V + 1 }, () => Infinity)
  );

  for (const row of input) {
    const [a, b, c] = row.split(" ").map((e) => parseInt(e));
    matrix[a][b] = Math.min(matrix[a][b], c);
  }

  for (let k = 0; k < V + 1; k++) {
    for (let i = 0; i < V + 1; i++) {
      if (k === i) continue;
      for (let j = 0; j < V + 1; j++) {
        if (k === j) continue;
        if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
          matrix[i][j] = matrix[i][k] + matrix[k][j];
        }
      }
    }
  }

  let min = Infinity;
  for (let i = 0; i < V + 1; i++) {
    min = Math.min(min, matrix[i][i]);
  }
  console.log(min !== Infinity ? min : -1);
};

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = function (input) {
  const n = parseInt(input.shift());
  const edgeMatrix = [];
  const resultMatrix = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity)
  );
  for (const row of input) {
    edgeMatrix.push(row.split(" ").map((e) => parseInt(e)));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (edgeMatrix[i][j] === 0) continue;
      resultMatrix[i][j] = edgeMatrix[i][j];
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (resultMatrix[i][j] > resultMatrix[i][k] + resultMatrix[k][j]) {
          resultMatrix[i][j] = resultMatrix[i][k] + resultMatrix[k][j];
        }
      }
    }
  }
  let ans = "";
  for (const row of resultMatrix) {
    ans += `${row
      .map((e) => {
        return e === Infinity ? 0 : 1;
      })
      .join(" ")}\n`;
  }
  console.log(ans.trim("\n"));
};

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
