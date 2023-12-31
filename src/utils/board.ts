export const makeBoard = (size:number|string = 3):string[][] | null => {
    const sizeNum = Number(size);
    const numRows = sizeNum;
    const numCols = sizeNum;
    
    const boardResults = Array.from({ length: numRows as number }, () =>
      Array.from({ length: numCols as number}, () => "")
    );
    
if(boardResults.length === 0){
    return null;
}
    return boardResults;
};

export const checkForRowWinner = <T>(board:(Array<T>)): string => {
    let winner: string;
    for (const row of board) {
      const rowSet = new Set(row as T[]);
      if (rowSet.size === 1 && !rowSet.has(undefined as any)) {
        winner = [...rowSet][0] as string;
        if(winner.length !== 0){
            return [...rowSet][0] as string;
        }
      }
    }
    return '';
};

export const checkForColumnWinner = (board: (string)[][]):Array<string> | 0 => {
    const newBoard = [];
    let column = 0;
    while (column < board.length) {
      const colArray = [];
      for (const row in board[column]) {
        colArray.push(board[row][column]);
      }
      column++;
      newBoard.push(colArray);
    }
   if(newBoard.length === 0) return 0;
    return newBoard as Array<any>;
  };

  export const checkForDiagonal = <T>(board: T[][]): ((string | 0)[][] | 0) => {
    let newInitBoard = board as T[][];
    let inc = 0;
    let dec = newInitBoard.length - 1;
    const newBoard: (string | 0)[][] = [[], []];

    while (inc < newInitBoard.length) {
        // Type assertions to specify the type of elements being pushed
        newBoard[0].push(newInitBoard[inc][dec] as string | 0);
        newBoard[1].push(newInitBoard[inc][inc] as string | 0);

        inc++;
        dec--;
    }

    if (newBoard.length === 0) return 0;

    return newBoard;
};

// create a function that accept for string item and return a string
export const showWinner = (winner:string):string | null => {
    if(winner.length === 0){
        return null;
    }
    return winner;
}

export const isBoardFull = (board: string[][] | null): boolean => {
  if (board === null) return false;
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === "") {
              return false;
          }
      }
  }
  return true;
};