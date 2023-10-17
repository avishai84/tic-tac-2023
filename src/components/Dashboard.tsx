import Header from './Header';
import IntakeForm from './IntakeForm';
import styled from "styled-components";
import {ScoresProp} from "../hooks/useScores";
import KeepScoresTable from "./KeepScoresTable";
import Grid from '@mui/material/Unstable_Grid2';

const H1 = styled.h1`
color: #dffb61;
margin:5px 0 15px 0;
font-size:2.5vw;
`;

type DashboardProps = {
    score: ScoresProp;
    players: string[];
    handlePlayers: (numberCells:string, emojiPlayer1:string, emojiPlayer2:string) => void;
};

const Dashboard = ({players, score, handlePlayers}:DashboardProps) => {

    return (
        <Header>
            <H1>Tic Tac Toe - The Fish And Fire Edition</H1>
                <Grid sx={{flexBasis: "fit-content",alignItems:"center", justifyContent:"center"}} container spacing={2}>
                    <Grid sx={{alignSelf:"center", justifyItems:"center"  }} xs={12}  >
                        <IntakeForm handleSubmit={handlePlayers}/>
                    </Grid>
                    <Grid sx={{flexBasis: "fit-content"}} xs={12} >
                        <KeepScoresTable playerIcons={players} scores={score}/>
                    </Grid>
                 
                </Grid>    
        </Header>
    )
};

export default Dashboard;