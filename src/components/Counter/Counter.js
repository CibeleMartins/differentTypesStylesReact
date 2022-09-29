import Button from '../Button/Button';
import './Counter.css';

function Counter ({number}) {

    return (
        <div className="main">
            <div className="mainText">
                <h3>{number}</h3>
            </div>

            <div className="mainBtn">
                <Button title="+"/>
                <Button title="-"/>
            </div>
        </div>
    )
}

export default Counter;