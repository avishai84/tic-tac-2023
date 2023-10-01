export const makeBoard = (size:number|string = 3):any[] | null => {
    const sizeNum = Number(size);
    const board = [];
    for(let i = 0; i < sizeNum; i++){
        board.push([...Array(sizeNum)]);
    }
    if(board.length === 0){
        return null;
    }
    return board;

};