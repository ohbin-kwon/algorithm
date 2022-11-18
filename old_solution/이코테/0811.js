// const fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split('\n')
// const [ M, N ] = input.shift()
// const array = input.map(v => v.split('').map(v => Number(v)))

// const sol = (input) => {
//   const [N, M] = input[0].split(" ").map((v) => +v);
//   const queue = [];
//   for (let i = 1; i <= N; i++) queue.push(input[i].split("").map((v) => +v)); // 미로 행렬
//   const check = Array.from({ length: N }, () => Array(M).fill(0)); // 방문 여부를 위한 체크 행렬

//   function bfs(row, col) {
//     const dx = [-1, 0, 1, 0];
//     const dy = [0, 1, 0, -1]; // 현재 위치로부터 동서남북 조회를 위한 dx, dy 배열
//     const queue = [];
//     queue.push([row, col]);
//     check[row][col] = 1;
//     while (queue.length) {
//       const [x, y] = queue.shift(); // 큐는 FIFO이므로, 맨 앞부터 꺼낸다.
//       for (let i = 0; i < 4; i++) {
//         const [nx, ny] = [x + dx[i], y + dy[i]]; // (nx, ny)는 이동 가능성이 있는 좌표.
//         if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; // 미로를 벗어나는 좌표는 제외
//         if (queue[nx][ny] && !check[nx][ny]) { // 길이 있고, 방문하지 않았다면 방문
//           check[nx][ny] = check[x][y] + 1; // (x,y)의 값이 (x,y)까지 최단경로에 해당한다.
//           queue.push([nx, ny]); // BFS(너비 우선)로 현재 위치에서 갈 수 있는 좌표를 모두 큐에 넣어준다.
//         }
//       }
//     }
//   }
//   bfs(0, 0);
//   return check[N - 1][M - 1];
// };


// function solution(N, M, maze) {
//   maze = maze.split('\n').map(m => {
//     m = m.split('').map(n => Number(n));
//     return m;
//   });

//   // 좌, 우, 상, 하
//   dx = [-1, 1, 0, 0];
//   dy = [0, 0, -1, 1];

//   const queue = [];
//   let x = 0, y = 0;
//   queue.push([x, y]);
//   while (queue.length !== 0) {
//     const temp = queue.shift();
//     x = temp[0];
//     y = temp[1];

//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
//         continue;
//       }

//       if (maze[nx][ny] === 0) {
//         continue;
//       }

//       if (maze[nx][ny] === 1) {
//         maze[nx][ny]  = maze[x][y] + 1;
//         queue.push([nx, ny]);
//       }
//     }
//   }

//   console.log(maze[N-1][M-1]);
// }

// solution(3, 3, '110\n010\n011');
// 110
// 010
// 011



let input = require("fs").readFileSync("test.txt").toString().split("\n")
const [N, M] = input.shift().split(" ").map(Number)
const map = input.map(v => v.split(" ").map(Number))

const solution = (N, M, map) => {
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  function BFS(x, y) {
    const queue = []
    queue.push([x, y])

    while (queue.length) {
      console.log("-----------시작")

      console.log("q1", queue)

      const [ix, iy] = queue.shift()

      for (let i = 0; i < 4; i++) {
        const nx = ix + dx[i]
        const ny = iy + dy[i]

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
        if (map[nx][ny] === 0) continue
        if (map[nx][ny] === 1) {
          console.log("1을 만낫다!!!")
          map[nx][ny] = map[ix][iy] + 1 // 이전 위치에 있던 값에서 + 1
          console.log(map)
          queue.push([nx, ny])
        }
      }
      console.log("q2", queue)
      console.log("-----------끝")

    }
  }

  BFS(0, 0)
  return map[N - 1][M - 1]
}

console.log(solution(N, M, map))