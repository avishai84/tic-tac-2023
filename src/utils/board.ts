export const makeBoard = (size:number|string = 3):string[][] | null => {
    const sizeNum = Number(size);
    // const board = [];

    const numRows = sizeNum;
    const numCols = sizeNum;
    
    const boardResults = Array.from({ length: numRows as number }, () =>
      Array.from({ length: numCols as number}, () => "")
    );
    
if(boardResults.length === 0){
    return null;
}
    return boardResults;
    // for(let i = 0; i < sizeNum; i++){
    //     board.push([...Array(sizeNum)]);
    // }
    // if(board.length === 0){
    //     return null;
    // }
    // return board;
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
