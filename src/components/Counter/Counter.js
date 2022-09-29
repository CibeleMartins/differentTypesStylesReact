import {useState} from 'react'
import Button from '../Button/Button';
import './Counter.css';

function Counter () {

    const [number, setNumber] = useState(0)
    const [isPositive, setPositive] = useState(true)
    // const [isNegative, setNegative] = useState(true)

    const inc = () => {

        if (number > 0) {

            setPositive(true)
        }
        setNumber(number + 1)
    }

    const dec = () => {

        if (number < 0) {
         setPositive(false)
        }

      setNumber(number -1)
    }

    return (
        <div className="main">
            <div className="mainText">
                <h3 style={{color: isPositive ? 'green' : 'red'}}>{number}</h3>
            </div>

            <div className="mainBtn">
                <Button onClick={() => inc()} title="+"/>
                <Button onClick={() => dec()}  title="-"/>
            </div>
        </div>
    )
}

export default Counter;