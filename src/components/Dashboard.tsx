import Header from './Header';
import IntakeForm from './IntakeForm';
import styled from "styled-components";
import {ScoresProp} from "../hooks/useScores";
import KeepScoresTable from "./KeepScoresTable";

const H1 = styled.h1`
color: #dffb61;
`;

const ScoreDiv = styled.div `display: flex;
justify-content: center;
align-items: center;
gap: 15px;`;
const ScoreColumnDiv = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;`;


type DashboardProps = {
    score: ScoresProp;
    players: string[];
    handlePlayers: (numberCells:string, emojiPlayer1:string, emojiPlayer2:string) => void;
    
};

const Dashboard = ({players, score, handlePlayers}:DashboardProps) => {

    return (
        <Header>
        <H1>Dashboard</H1>
        <h3>Tic Tac Toe - The Fish And Fire Edition</h3>
        <IntakeForm handleSubmit={handlePlayers}/>
        <ScoreDiv>
            <ScoreColumnDiv>  
                <KeepScoresTable playerIcons={players} scores={score}/>
            </ScoreColumnDiv>
        </ScoreDiv>
        </Header>
    )
};

export default Dashboard;