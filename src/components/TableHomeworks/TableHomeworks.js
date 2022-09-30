import { useState } from 'react';

import Button from '../Button/Button';
import styled from 'styled-components';

import {arrayHomeworks} from './data'

const MainForm = styled.form `  
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const FormControl = styled.div `

    width: 500px;
    height: 400px;
    margin-top: 100px;
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

`;
const InputDescription = styled.textarea `
    width: 150px;
    height: 100px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 5px;
    flex-wrap: wrap;

`;


const MainPostIt = styled.div `
    margin-top: 40px;
    width: 100;
    height: auto;
    background-color: lavender;
    border: 10px solid grey;
    border-radius: 10px;
    padding: 20px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
  
`;

const PostIt = styled.div `

    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: yellow
    `;


function TableHomewors () {

    const [homeworkValue, setHomework] = useState('')
    const [description, setDescription] = useState('')

    const changeInputState = (event) => setHomework(event.target.value); 
    const changeDescription = (event) => setDescription(event.target.value); 

    const formSubmit = (event) => {

        event.preventDefault();
        arrayHomeworks.push({id: Math.random(parseInt()).toFixed(2), title: homeworkValue, decribe: description})
        console.log(arrayHomeworks)
    
    }






    return (
        <>
        <MainForm onSubmit={formSubmit}>
            <FormControl>
                <Input 
                value={homeworkValue} 
                placeholder='Homework'
                onChange={(event)=> changeInputState(event)}/>
                <InputDescription
                value={description} 
                placeholder='Description'
                onChange={(event)=> changeDescription(event)}/>
                <Button title="Insert" />
            </FormControl>
        </MainForm>


        <MainPostIt>
           
             {arrayHomeworks.map((i) => <h1>{i.title}</h1>)}
        </MainPostIt>
        </>

    )
}

export default TableHomewors;