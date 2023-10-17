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
const CustomDialog = styled.dialog`
    background-color: rgba(255,255,255,.75);
`;

const styles = {
    fontSize: "1.5vh",
    fontWeight: "bold",
  }

const WinnerDisplay = ({ winner, resetGame }: WinnerDisplayProps) => {
    return (
        <CustomDialog open={!!winner}>

        <DivGridTwoCol>
            {winner !== "Tie" ? <h2>{winner} Won!</h2>: <h2>It's a Tie!</h2>}
            {winner && <Button sx={styles} variant="contained" startIcon={<RefreshCw />} onClick={resetGame}>
            New Game
            </Button>}
        </DivGridTwoCol>
        </CustomDialog>
    );
};
export default WinnerDisplay;