import {TableHeadLeft, TableHeadRight} from "./TableHeads";

type Scores = {
    player1: number;
    player2: number;
  };
 type KeepScoresProps = {
    playerIcons:string[];
    scores:Scores;
  }; 

const KeepScoresTable = ({playerIcons, scores}:KeepScoresProps) => {
    return(
    <div>
        <table>
        <thead>
          <tr>
            <TableHeadLeft>{playerIcons[0]}</TableHeadLeft>
            <TableHeadRight>{playerIcons[1]}</TableHeadRight>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{scores.player1}</td>
              <td>{scores.player2}</td>
            </tr>
          </tbody>
  </table>
    </div>
    );
};

export default KeepScoresTable