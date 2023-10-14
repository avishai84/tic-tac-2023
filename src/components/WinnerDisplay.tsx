import {RefreshCw} from "lucide-react"
import styled from "styled-components";
import {Button} from "@mui/material";

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
        <dialog open={!!winner}>

        <DivGridTwoCol>
            {winner && <h2>{winner} Won!</h2>}
            {winner && <Button variant="contained" startIcon={<RefreshCw />} onClick={resetGame}>
            New Game
            </Button>}
        </DivGridTwoCol>
        </dialog>
    );
};
export default WinnerDisplay;