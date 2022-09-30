import { useState } from 'react';

import Button from '../Button/Button';
import styled from 'styled-components';

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


function TableHomewors (props) {

    const [homeworkValue, setHomework] = useState('')
    // const [description, setDescription] = useState('')

    const changeInputState = (event) => setHomework(event.target.value); 
    // const changeDescription = (event) => setDescription(event.target.value); 

    const [postIt, setPostIt] = useState([])

    const formSubmit = (event) => {

        event.preventDefault();
        
       const homeworks = [];

       homeworks.unshift({id: Math.random(parseFloat()).toString() ,title: homeworkValue})

       setPostIt(prevState => [...prevState, ...homeworks])
        console.log(...homeworks)
    }




    return (
        <>
        <MainForm onSubmit={formSubmit}>
            <FormControl>
                <Input 
                value={homeworkValue} 
                placeholder='Homework'
                onChange={(event)=> changeInputState(event)}/>
                {/* <InputDescription
                value={description} 
                placeholder='Description'
                onChange={(event)=> changeDescription(event)}/> */}
                <Button title="Insert" />
            </FormControl>
        </MainForm>


        <MainPostIt>
                {postIt.map(i => <h3>{i.title}</h3>)}
        </MainPostIt>
        </>

    )
}

export default TableHomewors;