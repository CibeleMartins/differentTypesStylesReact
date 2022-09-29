import {useState} from 'react'
import Button from '../Button/Button';
import './Counter.css';

function Counter () {

    const [number, setNumber] = useState(0)

    const inc = () => setNumber(number + 1)

    const dec = () => setNumber(number -1)

    return (
        <div className="main">
            <div className="mainText">
                <h3>{number}</h3>
            </div>

            <div className="mainBtn">
                <Button onClick={() => inc()} title="+"/>
                <Button onClick={() => dec()}  title="-"/>
            </div>
        </div>
    )
}

export default Counter;