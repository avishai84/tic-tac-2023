import {Binary} from "lucide-react"

type ResetScoreProps = {
    resetScores: () => void;
};

const ResetScoreButton = ({resetScores}:ResetScoreProps) => {
 
  return (
    <button onClick={resetScores}><Binary />Reset Scores</button>
  );
};
export default ResetScoreButton;

