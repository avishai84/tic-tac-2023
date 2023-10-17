import {useState, useEffect, useMemo} from "react";
import styled from "styled-components";
import {makeBoard, checkForRowWinner, checkForColumnWinner, checkForDiagonal, showWinner, isBoardFull} from "../utils/board";
import useScores, {ScoresProp} from "../hooks/useScores";
import WinnerDisplay from "./WinnerDisplay";
import Grid from '@mui/material/Unstable_Grid2';
import ResetScoreButton from "./ResetScoreButton";

const DivGame = styled.div ``;
const DivGameWithIcon = styled.div<{ $nextPlayer: string, $isCellOccupied: boolean }>`
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 0.5;
        }
    }

    &.nextPlayerHover:before {
        position: absolute;
        content: ${props => (props.$isCellOccupied ? '""' : `"${props.$nextPlayer}"`)};
        font-size: 7.5vw;
        opacity: 0;
        animation: ${props => (props.$isCellOccupied ? 'none' : 'fadein 250ms forwards')};
    }
`;

const Span = styled.span `
font-size: 7.5vw; text-shadow: 0px 3px 4px #000;`;
const Div = styled.div `
display: flex;
background-color: #282c34;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: #dffb61;
`;


type SizeProps = {
    size: string;
    playersIcon?: string[];
    updateScoresAndIcons: (players:string[], scores:ScoresProp) => void;
    };

const Board = ({size, playersIcon, updateScoresAndIcons}:SizeProps):JSX.Element => {

    const [playerIconsState, setPlayerIcons] = useState(['🔥', '🐟']);
    const [board, setBoard] = useState(makeBoard(size));
    const [player, setPlayer] = useState(playerIconsState[0]);
    const [winner, setWinner] = useState<string | null>(null);

    const {scores, incrementPlayerScore, resetScores} = useScores();

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
//  check if current cell is empty
    if (newBoard && newBoard[rowIndex][cellIndex] !== "") {
        return;
    }

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
    // Check for tie game
    if (isBoardFull(board)) {
        setWinner("Tie");
        return;
    }
  };
  
  const nextPlayer = player === playerIconsState[1] ? playerIconsState[0] : playerIconsState[1];

  const playerBoard = useMemo(() => (
    board && board.map((row, rowIndex):JSX.Element => {
        return(<DivGame key={rowIndex} style={{display:"flex", justifyContent:"center", gap:"2px"}}>
            {row.map((cell:string, cellIndex:number) => {
                return(<DivGameWithIcon 
                    $nextPlayer={nextPlayer}
                    $isCellOccupied={cell !== ""}
                    // on hover toggle a class name of playerHover
                    onMouseEnter={(e) => { e.currentTarget.classList.add("nextPlayerHover"); }
                    }
                    onMouseLeave={(e) => { e.currentTarget.classList.remove("nextPlayerHover"); }
                    }
                    onClick={() => handleClick(rowIndex, cellIndex)}
                    style={{display: "flex", gap:"0",
                justifyContent: "center", boxShadow:"0px 0px 0px 1px white inset",
                alignItems: "center",outline: "2px solid white", height:"10vw", width:"10vw"}} key={cellIndex}><Span>{cell}</Span></DivGameWithIcon>)
            })}
        </DivGame>)
    })
), [board]);


useEffect(() => {
    setBoard(makeBoard(size));
    playersIcon && setPlayerIcons(playersIcon);
    playersIcon && setPlayer(playersIcon[0]);
    playersIcon && updateScoresAndIcons(playersIcon, scores);
}, [size, playersIcon, scores]);

useEffect(() => {
    if (winner) {
        keepScore(winner);
    }
}, [winner]);

const resetGameFunction = () => {
    setWinner(null);
    setBoard(makeBoard(size));
};

const resetScoresFunction = () => {
    resetScores();
    resetGameFunction()
};

    return(
        <Div>
            <WinnerDisplay winner={winner} resetGame={resetGameFunction}/>
            {winner === null && playerBoard}
            {winner === null && <Grid sx={{marginTop:"15px", flexBasis: "fit-content"}} xs={12} >
                <ResetScoreButton resetScoresFunction={() => resetScoresFunction()}/>
            </Grid>}
        </Div>
       );
};

export default Board;