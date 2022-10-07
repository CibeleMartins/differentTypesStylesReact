
import Button from '../Button/Button';

import styles from './TrackLearning.module.css';

const TrackLearning = ()=> {

    return (
        <>
            <div className={styles.container}>
                <h1></h1>

                <form>
                    <div>
                    <input type="text" placeholder="What you learning today?"/>
                    <input type="date"/>
                    </div>

                    <div>
                    <input type="text" placeholder="Want describe your learned?"/>

                    <Button title="Note"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TrackLearning;