import {RefreshCw} from "lucide-react"

type WinnerDisplayProps = {
    winner: string | null;
    resetGame: () => void;
};

const WinnerDisplay = ({ winner, resetGame }: WinnerDisplayProps) => {
    return (
        <div>
            {winner && <h2>{winner} Won!</h2>}
            {winner &&  <button onClick={resetGame}>
            <RefreshCw />New Game
            </button>}
        </div>
    );
};
export default WinnerDisplay;