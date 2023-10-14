import {Binary} from "lucide-react"
import {Button} from "@mui/material";

type ResetScoreProps = {
  resetScoresFunction: () => void;
};

const ResetScoreButton = ({resetScoresFunction}:ResetScoreProps) => {
 
  return (
    <Button variant="contained" startIcon={<Binary />} onClick={resetScoresFunction}>Reset Scores</Button>
  );
};
export default ResetScoreButton;

