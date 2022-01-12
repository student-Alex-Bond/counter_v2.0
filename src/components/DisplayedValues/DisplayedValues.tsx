import React from 'react';
import Button from "../Button/Button";
import styles from './DisplayedValues.module.css'

type DisplayedValuesType = {
    count: number
    incrementHandler: () => void
    resetHandler: () => void
}


const DisplayedValues = (props: DisplayedValuesType) => {


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <span className={styles.spanTextSize}>{props.count}</span>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick = {props.incrementHandler}>Inc</Button>
                <Button onClick={props.resetHandler}>Reset</Button>
            </div>
        </div>
    );
};

export default DisplayedValues;