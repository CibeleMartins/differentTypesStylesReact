import { useState } from 'react';

import Button from '../Button/Button';
import styled from 'styled-components';


const FormControl = styled.div `

    width: 500px;
    height: 200px;
    margin-top: 200px;
    border-radius: 10px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Input = styled.input `
    width: 150px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px;

`


function TableHomewors () {

    const [homeworkValue, setHomework] = useState('')

    const changeInputState = (event) => setHomework(event.target.value); 

    console.log(homeworkValue)

    return (
        <FormControl>
         <Input 
         value={homeworkValue} 
         placeholder='Homework'
         onChange={(event)=> changeInputState(event)}/>
            <Button title="Insert"/>
        </FormControl>
    )
}

export default TableHomewors;