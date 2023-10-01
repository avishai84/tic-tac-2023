import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {makeBoard} from "../utils/board";

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

    const handleClick = (rowIndex:number, cellIndex:number) => {
    const newBoard = board && [...board];
    if(newBoard){
        newBoard[rowIndex][cellIndex] = player;
        setBoard(newBoard);
    }
  
    // console.log(rowIndex, cellIndex);
    // set the player
    setPlayer(player === playerIconsState[0] ? playerIconsState[1] : playerIconsState[0]);
  };
  

// console.log(size, playerIconsState, "state size, playerIconsState")


  const playerBoard = (
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
);

useEffect(() => {
    "props updated"
    setBoard(makeBoard(size));
    playersIcon && setPlayerIcons(playersIcon);
    playersIcon && setPlayer(playersIcon[0]);
}, [size, playersIcon]);


    return(<Div>{playerBoard}</Div>);
};

export default Board;