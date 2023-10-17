import {Binary} from "lucide-react"
import {Button} from "@mui/material";

type ResetScoreProps = {
  resetScoresFunction: () => void;
};

const ResetScoreButton = ({resetScoresFunction}:ResetScoreProps) => {
 
const styles = {
  fontSize: "1.5vh",
  fontWeight: "bold",
}
  return (
    <Button sx={styles} variant="contained" startIcon={<Binary />} onClick={resetScoresFunction}>Reset Scores</Button>
  );
};
export default ResetScoreButton;

