import { useState } from 'react';

import Button from '../Button/Button';
import styled from 'styled-components';

const MainForm = styled.form `  
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;

const Title = styled.h1 `
    width: 100%;
    text-align: center;
    color: black;
    font-weight: 200;
`

const FormControl = styled.div `

    width: 100%;
    height: 300px;
    margin-top: 50px;
    border-radius: 10px;
    background-color: lavender;
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
    width: 50%;
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
    padding: 20px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
`;

const PostIt = styled.div `
    width: 30%;
    height: 200px;
    padding: 10px;
    background-color: #FFFACD;
    border-radius: 10px;
    `;


function TableHomewors (props) {

    const [homeworkValue, setHomework] = useState('');
    const [description, setDescription] = useState('');

    const changeInputState = (event) => setHomework(event.target.value); 
    const changeDescription = (event) => setDescription(event.target.value); 

    const [postIt, setPostIt] = useState([]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const formSubmit = (event) => {

        event.preventDefault();
        
       const homeworks = [];

       const positionColors = getRandomInt(0,5)

       const colors = ['#B0E0E6', '#D8BFD8', '#FFE4E1', '#F0FFF0', '#FFE4C4', '#F8F8FF'];

       homeworks.unshift({id: Math.random(parseFloat()).toString(), title: homeworkValue, decribe: description, color: colors[positionColors] })

       setPostIt(prevState => [...prevState, ...homeworks])
    };

    return (
        <>
        <MainForm onSubmit={formSubmit}>

           <Title>Organize your hamoworks here!</Title>
            <FormControl>
                <Input 
                value={homeworkValue} 
                placeholder='Homework'
                onChange={(event)=> changeInputState(event)}/>
                <InputDescription
                value={description} 
                placeholder='Description'
                onChange={(event)=> changeDescription(event)}/>
                <Button style={{background: 'pink', fontSize: 20}} title="Insert" />
            </FormControl>
        </MainForm>

        <MainPostIt>
                {postIt.map((i) => {
                    return <PostIt key={i.id} style={{background: i.color}}>
                     <h3>{i.title}</h3>
                    <p>{i.decribe}</p>
                    </PostIt>
                })}
        </MainPostIt>
        </>

    )
}

export default TableHomewors;