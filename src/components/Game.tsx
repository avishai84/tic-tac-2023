import { useState } from 'react';
import Board from './Board';
import Dashboard from './Dashboard';
import {ScoresProp} from "../hooks/useScores";

function Game() {

const [numberCells, setNumberCells] = useState<string>('3');
const [emojiPlayers, setEmojiPlayers] = useState<Array<string>>(['🔥','🐟']);
const [playerIconsState, setPlayerIcons] = useState(['🔥', '🐟']);
const [score, setScore] = useState<ScoresProp>({player1:0, player2:0});


  const handlePlayers = (numberCells:string, emojiPlayer1:string, emojiPlayer2:string) => {
    setNumberCells(numberCells);
    setEmojiPlayers([emojiPlayer1, emojiPlayer2]);
  }

const updateScoresAndIcons = (players:string[], scores:ScoresProp) => {
    setPlayerIcons(players);
    setScore(scores);
  }
 
  return (
      <div>
        <Dashboard
          handlePlayers={handlePlayers}
          players={playerIconsState}
          score={score}
        />
        <Board 
          size={numberCells} 
          playersIcon={emojiPlayers} 
          updateScoresAndIcons={updateScoresAndIcons}   
          />
      </div>
  );
}

export default Game;
