import React, {useState, useEffect, useMemo} from "react";
import styled from "styled-components";
import {makeBoard, checkForRowWinner, checkForColumnWinner, checkForDiagonal, showWinner} from "../utils/board";
import useScores from "../hooks/useScores";

const DivGame = styled.div ``;
const Span = styled.span `
font-size: 7.5vw; text-shadow: 0px 3px 4px ##2e7b02;`;
const Div = styled.div `
display: flex;
background-color: #282c34;
min-height: 90vh;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

type SizeProps = {
    size: string;
    playersIcon?: string[];
    };

const Board = ({size, playersIcon}:SizeProps):JSX.Element => {

    const [playerIconsState, setPlayerIcons] = useState(['🔥', '🐟']);
    const [board, setBoard] = useState(makeBoard(size));
    const [player, setPlayer] = useState(playerIconsState[0]);
    const [winner, setWinner] = useState<string | null>(null);
    const { scores, incrementPlayerScore, resetScores} = useScores();
    const keepScore = (winner:string | null) => {
        if (winner === playerIconsState[0]) {
            incrementPlayerScore('player1');
        }
        if (winner === playerIconsState[1]) {
            incrementPlayerScore('player2');
        }
    };

const handleClick = (rowIndex:number, cellIndex:number) => {
   
    const newBoard = board && [...board];
   
    if(newBoard){
        let currentPlayer = newBoard[rowIndex][cellIndex];
            currentPlayer = player === playerIconsState[0] ? playerIconsState[1] : playerIconsState[0];
            newBoard[rowIndex][cellIndex] = currentPlayer;
   
        setPlayer(currentPlayer);
        newBoard && setBoard(newBoard);
    }

   if (board && checkForRowWinner(board)) {
    setWinner(showWinner(checkForRowWinner(board)));
    }

   if (board && checkForRowWinner(checkForColumnWinner(board) as any)) {
    setWinner(checkForRowWinner(checkForColumnWinner(board) as any));
      }
    if (board && checkForRowWinner(checkForDiagonal(board) as any)) {
    setWinner(checkForRowWinner(checkForDiagonal(board) as any));
    }
  };
  


  const playerBoard = useMemo(() => (
    board && board.map((row, rowIndex):JSX.Element => {
        return(<DivGame key={rowIndex} style={{display:"flex", justifyContent:"center", gap:"2px"}}>
            {row.map((cell:string, cellIndex:number) => {
                return(<DivGame 
                    onClick={() => handleClick(rowIndex, cellIndex)}
                    style={{display: "flex", gap:"0",
                justifyContent: "center", boxShadow:"0px 0px 0px 1px white inset",
                alignItems: "center",outline: "2px solid white", height:"10vw", width:"10vw"}} key={cellIndex}><Span>{cell}</Span></DivGame>)
            })}
        </DivGame>)
    })
), [board]);

useEffect(() => {
    setBoard(makeBoard(size));
    playersIcon && setPlayerIcons(playersIcon);
    playersIcon && setPlayer(playersIcon[0]);
}, [size, playersIcon]);

useEffect(() => {
    if (winner) {
        keepScore(winner);
    }
  
}, [winner]);

const keepScores = (<table>
        <thead>
            <tr>
                <th>Players</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{playerIconsState[0]}</td>
                <td>{scores.player1}</td>
            </tr>
            <tr>
                <td>{playerIconsState[1]}</td>
                <td>{scores.player2}</td>
            </tr>
        </tbody>
</table>);

    return(<>
        {winner && <DivGame><Div><Span>{winner} </Span><h1>win</h1> <button onClick={() => {setWinner(null);setBoard(makeBoard(size));}}>Play Again</button></Div></DivGame>}
    <Div>
        <div>{keepScores}<span><button onClick={() => resetScores()}>Reset Scores</button></span></div>
        {playerBoard}</Div></>);
};

export default Board;