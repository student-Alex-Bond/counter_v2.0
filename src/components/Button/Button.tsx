import React from 'react';
import styles from './Button.module.css'

type ButtonProps = {
    children: string
    onClick?: () => void
    style?: Object
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick} className={styles.btn} style={styles && props.style}
        disabled={props.disabled}
        >{props.children} </button>
    );
};

export default Button;