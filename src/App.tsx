import { useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import IntakeForm from './components/IntakeForm';

// type FormProps = {
//   handleSubmit: (numberCells:number, emojiPlayer1:string, emojiPlayer2:string) => {numberCells, emoji};
//   size: number;
//   playersIcon?: string[];
// }

function App() {
const [numberCells, setNumberCells] = useState<string>('3');
const [emojiPlayers, setEmojiPlayers] = useState<Array<string>>(['🔥','🐟']);

  const handlePlayers = (numberCells:string, emojiPlayer1:string, emojiPlayer2:string) => {
    console.log(numberCells, emojiPlayer1, emojiPlayer2, "handlePlayers parent");
    setNumberCells(numberCells);
    setEmojiPlayers([emojiPlayer1, emojiPlayer2]);
  }
  return (
    <div>
      <Header>
        Tic Tac Toe - The Fish And Fire Edition
        <IntakeForm handleSubmit={handlePlayers}/>
      </Header>
      <Board size={numberCells} playersIcon={emojiPlayers}/>
    </div>
  );
}

export default App;
