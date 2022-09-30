import styles from './Button.module.css';


function Button ({title, className, onClick, style}) {

    return <button style={style} onClick={onClick} className={`${styles.btn} || ${className}`}>{title}</button>
}

export default Button;