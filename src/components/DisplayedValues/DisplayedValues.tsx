import React from 'react';
import Button from "../Button/Button";
import styles from './DisplayedValues.module.css'
import {displayStylePropsType} from "../../App";

type DisplayedValuesType = {
    count: number
    incrementHandler: () => void
    resetHandler: () => void
    displayStyleProps: displayStylePropsType
}


const DisplayedValues = (props: DisplayedValuesType) => {


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <span className={styles.spanTextSize} style={props.displayStyleProps.countMaxStyle}>{props.count}</span>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick = {props.incrementHandler} {...props.displayStyleProps.buttonProps} >Inc</Button>
                <Button onClick={props.resetHandler}>Reset</Button>
            </div>
        </div>
    );
};

export default DisplayedValues;