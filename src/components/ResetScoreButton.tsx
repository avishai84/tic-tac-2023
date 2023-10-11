import {Binary} from "lucide-react"

type ResetScoreProps = {
  resetScoresFunction: () => void;
};

const ResetScoreButton = ({resetScoresFunction}:ResetScoreProps) => {
 
  return (
    <button onClick={resetScoresFunction}><Binary />Reset Scores</button>
  );
};
export default ResetScoreButton;

