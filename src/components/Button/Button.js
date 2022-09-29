import styles from './Button.module.css';


function Button ({title, className, onClick}) {

    return <button onClick={onClick} className={`${styles.btn} || ${className}`}>{title}</button>
}

export default Button;