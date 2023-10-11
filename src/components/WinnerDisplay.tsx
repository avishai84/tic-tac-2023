import {RefreshCw} from "lucide-react"
import styled from "styled-components";

type WinnerDisplayProps = {
    winner: string | null;
    resetGame: () => void;
};
const DivGridTwoCol = styled.div `
display: grid;
grid-template-columns: 1fr 1fr ; 
grid-template-rows: auto auto; 
gap: 16px; 
align-items: center; 
justify-items: center;
padding: 16px; 
`;
const WinnerDisplay = ({ winner, resetGame }: WinnerDisplayProps) => {
    return (
        <DivGridTwoCol>
            {winner && <h2>{winner} Won!</h2>}
            {winner && <button onClick={resetGame}>
            <RefreshCw />New Game
            </button>}
        </DivGridTwoCol>
    );
};
export default WinnerDisplay;