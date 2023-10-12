import { useState } from "react";
import styled from "styled-components";
// create a form that takes a number input and a icon input
import {emojis} from "../utils/emojis";
import {Replace} from "lucide-react"
import {FormControl, Button, Input, Select as SelectMUI, MenuItem } from '@mui/material';

const Div = styled.div `
position: relative;
display: flex;
background-color: #282c34;
// min-height: 10vh;
flex-direction: column;
align-items: center;
justify-content: center;`;

const Label = styled.label `
font-size:3.7vw;
padding:2px 5px;
& input{
    width:100%;
    padding:5px;
}
& select{
    width:100%;
    padding:5px;
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


const Select = styled.select ``;

type IntakeFormProps<T> = {
    handleSubmit: (numberCells:T, emojiPlayer1:T, emojiPlayer2:T) => void;
};
const IntakeForm = <T,>({ handleSubmit }: IntakeFormProps<T>):JSX.Element => {
    const [numberCells, setNumberCells] = useState<T>();
    const [emojiPlayer1, setEmojiPlayer1] = useState<T>();
    const [emojiPlayer2, setEmojiPlayer2] = useState<T>();

    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 
    const form = event.currentTarget;
        console.log(form)
    // const formData = new FormData(form);
    // const numberCells = formData.get('numberCells') as unknown as T;
    // const emojiPlayer1 = formData.get('emojiPlayer1') as unknown as T;
    // const emojiPlayer2 = formData.get('emojiPlayer2') as unknown as T;

    handleSubmit(numberCells, emojiPlayer1, emojiPlayer2);
}

    const dropDownEmojis = (emojis.map(({name, symbol}, index:number) => {
        return(<MenuItem key={index} value={symbol}>{symbol}
            <> {name} </>
        </MenuItem>)
    }));

 
    return(<Div>
        <form onSubmit={handleFormSubmit}>
        <DivGridFourR>
            <FormControl variant="outlined">
            <Label htmlFor="numberCells">Grid:
                <Input 
                    defaultValue={"3"}
                    name="numberCells"
                    id="numberCells"
                    type="number"
                    placeholder="Enter a number"
                    value={numberCells}
                    onChange={(e) => setNumberCells(e.target.value as unknown as T)}
                    />
            </Label>
            </FormControl>
            <FormControl>
           <Label htmlFor="emojiPlayer1">Player 1:
           <SelectMUI 
            name="emojiPlayer1"
            id="emojiPlayer1"
            value={emojiPlayer1}
            onChange={(e) => setEmojiPlayer1(e.target.value as T)}
            >{dropDownEmojis}</SelectMUI>
           </Label>
           <Label htmlFor="emojiPlayer2">Player 2:
           <SelectMUI
            name="emojiPlayer2"
            id="emojiPlayer2"
            value={emojiPlayer2}
            onChange={(e) => setEmojiPlayer2(e.target.value as T)}
            >{dropDownEmojis}</SelectMUI>
           </Label>
           </FormControl>
           <FormControl>
           <Button variant="contained" startIcon={<Replace />}>Change</Button>
           </FormControl>
          
            </DivGridFourR> 
        </form>
        </Div>);
};

export default IntakeForm;
