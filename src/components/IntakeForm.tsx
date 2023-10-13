import { useState, useEffect } from "react";
import styled from "styled-components";
import {emojis} from "../utils/emojis";
import {InputLabel, TextField, FormControl, Button, Input, Select as SelectMUI, MenuItem } from '@mui/material';

const Div = styled.div `
position: relative;
display: flex;
background-color: #282c34;
// min-height: 10vh;
flex-direction: column;
align-items: center;
justify-content: center;`;

const CustomSelect = styled(SelectMUI) `

`;
const LabelCustom = styled(InputLabel)`
background-color: #282c34;
color: #fff !important;
& ~ div {
    color: #fff;
    & div:first-child {
        border:1px solid white;
    }
    & svg{
        fill: #fff;
    }
}
  :hover {
    color: #fff;
    
  }
`;
const CustomTextField = styled(TextField) `
label {
    color: #fff;
    background-color: #282c34;
    & ~ div, & ~ div:focus-within {
        border:1px solid white;
        color:white;
    }
}
& div {
    color: #fff;
}
  :hover {
    color: #fff;
  }
`;

const DivGridFourR = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 
grid-template-rows: auto auto auto auto; 
gap: 16px; 
align-items: center; 
justify-items: center;

& label > * {
    
}
& button{
    align-self: end;
}
`;


type IntakeFormProps<T> = {
    handleSubmit: (numberCells:T, emojiPlayer1:T, emojiPlayer2:T) => void;
};
const IntakeForm = <T,>({ handleSubmit }: IntakeFormProps<T>):JSX.Element => {
    const [numberCells, setNumberCells] = useState<T>(("3" as unknown) as T);
    const [emojiPlayer1, setEmojiPlayer1] = useState<T>(emojis[emojis.length - 1].symbol as T);
    const [emojiPlayer2, setEmojiPlayer2] = useState<T>(emojis[0].symbol as T);
    

    const dropDownEmojis = (emojis.map(({name, symbol}, index:number) => {
        return(<MenuItem key={index} value={symbol}>{symbol}
            <> {name} </>
        </MenuItem>)
    }));

    useEffect(() => {
        handleSubmit(numberCells as unknown as T, emojiPlayer1 as unknown as T, emojiPlayer2 as unknown as T);
    },[numberCells, emojiPlayer1, emojiPlayer2]);
 
    return(<Div>
      
        <DivGridFourR>
            <FormControl variant="outlined">
                <CustomTextField 
                defaultValue="3"
                type="number"
                label="Grid"
                placeholder="Grid: Enter a number"
                variant="outlined"
                onChange={(e) => setNumberCells(e.target.value as T)}
                >Grid: Enter a number</CustomTextField>
            </FormControl>
            <FormControl variant="outlined">
            <LabelCustom id="emojiPlayer1">Player 1</LabelCustom>
           <CustomSelect 
            defaultValue={emojis[emojis.length - 1].symbol}
            name="emojiPlayer1"
            id="emojiPlayer1"
            value={emojiPlayer1}
            onChange={(e) => setEmojiPlayer1(e.target.value as T)}
            >{dropDownEmojis}</CustomSelect>
           </FormControl>
           <FormControl variant="outlined">
           <LabelCustom htmlFor="emojiPlayer2">Player 2</LabelCustom>
           <CustomSelect
            defaultValue={emojis[0].symbol}
            name="emojiPlayer2"
            id="emojiPlayer2"
            value={emojiPlayer2}
            onChange={(e) => setEmojiPlayer2(e.target.value as unknown as T)}
            >{dropDownEmojis}</CustomSelect>
           </FormControl>
        </DivGridFourR> 
        </Div>);
};

export default IntakeForm;
