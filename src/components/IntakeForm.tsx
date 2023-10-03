import styled from "styled-components";
// create a form that takes a number input and a icon input
import {emojis} from "../utils/emojis";

const VisuallyHiddenSpan = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0,0,0,0);
border: 0;
`;
const Div = styled.div `
position: relative;
display: flex;
background-color: #282c34;
min-height: 10vh;
flex-direction: column;
align-items: center;
justify-content: center;`;

const IntakeForm = ({handleSubmit}:any):JSX.Element => {

    const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const numberCells = formData.get('numberCells');
    const emojiPlayer1 = formData.get('emojiPlayer1');
    const emojiPlayer2 = formData.get('emojiPlayer2');

     handleSubmit(numberCells, emojiPlayer1, emojiPlayer2);
}

    const dropDownEmojis = (emojis.map(({name, symbol}, index:number) => {
        return(<option key={index} value={symbol}>{symbol}
            <> {name} </>
        </option>)
    }));
 
    return(<Div>
        <form onSubmit={handleFormSubmit}>
        <Div>
            <label htmlFor="numberCells">Enter a number:
            <input defaultValue={"3"} name="numberCells" type="number" placeholder="Enter a number" />
            </label>
           <label htmlFor="emojiPlayer1">Select an emoji 1:
           <select name="emojiPlayer1">{dropDownEmojis}</select>
           </label>
           <label htmlFor="emojiPlayer2">Select an emoji 2:
           <select name="emojiPlayer2">{dropDownEmojis}</select>
           </label>
            <button>Start</button>
            </Div>
        </form>
        </Div>);
};

export default IntakeForm;
