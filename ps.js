/**
 * @param {character[][]} board
 * @return {boolean}
 */

const checkRow = (board) => {
    for(let row=0; row<board.length; row++){
        const visited = Array.from({length: 0}, ()=>false);
        for(let col=0; col<board.length; col++){
            if(!('0'<=board[row][col] && board[row][col]<='9')) continue;
            if(visited[parseInt(board[row][col])]) return false;
            visited[parseInt(board[row][col])] = true;
        }
    }
    return true;
}

const checkCol = (board) => {
    for(let col=0; col<board.length; col++){
        const visited = Array.from({length: 0}, ()=>false);
        for(let row=0; row<board.length; row++){
            if(!('0'<=board[row][col] && board[row][col]<='9')) continue;
            if(visited[parseInt(board[row][col])]) return false;
            visited[parseInt(board[row][col])] = true;
        }
    }   
    return true;
}

const checkBox = (board) => {
    const points = [[0,0],[0,3],[0,6],
                   [3,0],[3,3],[3,6],
                   [6,0],[6,3],[6,6],];
    for(let i=0; i<9; i++){
        const [a,b] = points[i];
        const visited = Array.from({length: 0}, ()=>false);
        for(let j=0; j<3; j++){
            for(let k=0; k<3; k++){
                const [row, col] = [j+a, k+b];
                if(!('0'<=board[row][col] && board[row][col]<='9')) continue;
                if(visited[parseInt(board[row][col])]) return false;
                visited[parseInt(board[row][col])] = true;
            }
        }
    }
    return true;
}

var isValidSudoku = function(board) {
    console.log(checkRow(board), checkCol(board), checkBox(board))
    return checkRow(board) && checkCol(board) && checkBox(board);
};
