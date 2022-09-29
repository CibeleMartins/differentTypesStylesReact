import styles from './Button.module.css';


function Button ({title, className}) {

    return <button className={`${styles.btn} || ${className}`}>{title}</button>
}

export default Button;