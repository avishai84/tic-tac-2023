import { useState } from "react";
import styled from "styled-components";
// create a form that takes a number input and a icon input
import {emojis} from "../utils/emojis";
import {Replace} from "lucide-react"
import {InputLabel, TextField, FormControl, Button, Input, Select as SelectMUI, MenuItem } from '@mui/material';

const Div = styled.div `
position: relative;
display: flex;
background-color: #282c34;
// min-height: 10vh;
flex-direction: column;
align-items: center;
justify-content: center;`;

const SelcrCustom = styled(SelectMUI) `
background-color:  #fff;
color:#dffb61;
`;
const LabelCustom = styled(InputLabel)`
background-color: #fff;
color:#dffb61;
border-color: #dffb61;
`;
const CustomTextField = styled(TextField) `
// background-color:  #fff;
color:#dffb61;
border-color: #dffb61;
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
    const [numberCells, setNumberCells] = useState<T>();
    const [emojiPlayer1, setEmojiPlayer1] = useState<T>();
    const [emojiPlayer2, setEmojiPlayer2] = useState<T>();
    console.log("handleSubmit " , handleSubmit)
    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
 
    const form = event.currentTarget;
       
    // const formData = new FormData(form);
    // const numberCells = formData.get('numberCells') as unknown as T;
    // const emojiPlayer1 = formData.get('emojiPlayer1') as unknown as T;
    // const emojiPlayer2 = formData.get('emojiPlayer2') as unknown as T;

    //
}
    const getData = () => {
        handleSubmit(numberCells as unknown as T, emojiPlayer1 as unknown as T, emojiPlayer2 as unknown as T);
    };

    const dropDownEmojis = (emojis.map(({name, symbol}, index:number) => {
        return(<MenuItem key={index} value={symbol}>{symbol}
            <> {name} </>
        </MenuItem>)
    }));

 
    return(<Div>
      
        <DivGridFourR>
        <FormControl variant="outlined">
            <CustomTextField defaultValue="3" type="number" label="Grid" placeholder="Grid: Enter a number" variant="outlined">Grid: Enter a number</CustomTextField>
        </FormControl>
            
            {/* <FormControl variant="outlined">
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
            </FormControl> */}
            <FormControl variant="outlined">
            <LabelCustom id="emojiPlayer1">Player 1: </LabelCustom>
           <SelcrCustom 
            name="emojiPlayer1"
            id="emojiPlayer1"
            value={emojiPlayer1}
            onChange={(e) => setEmojiPlayer1(e.target.value as T)}
            >{dropDownEmojis}</SelcrCustom>
           </FormControl>
           <FormControl variant="outlined">
           <LabelCustom htmlFor="emojiPlayer2">Player 2: </LabelCustom>
           <SelcrCustom
            name="emojiPlayer2"
            id="emojiPlayer2"
            value={emojiPlayer2}
            onChange={(e) => setEmojiPlayer2(e.target.value as unknown as T)}
            >{dropDownEmojis}</SelcrCustom>
          
           
           <Button onClick={getData}variant="contained" startIcon={<Replace />}>Change</Button>
           </FormControl>
          
        </DivGridFourR> 
       
        </Div>);
};

export default IntakeForm;
