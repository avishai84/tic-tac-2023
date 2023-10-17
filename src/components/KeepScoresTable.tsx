import {TableHeadLeft, TableHeadRight} from "./TableHeads";
import styled from 'styled-components';

type Scores = {
    player1: number;
    player2: number;
  };
 type KeepScoresProps = {
    playerIcons:string[];
    scores:Scores;
  }; 
const TableRow = styled.tr `
  text-align: center;
  background: rgba(0,0,0,.15)
`;
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
            <TableRow>
              <td>{scores.player1}</td>
              <td>{scores.player2}</td>
            </TableRow>
          </tbody>
        </table>
      </div>
    );
};

export default KeepScoresTable