import React from 'react';
import Button from "../Button/Button";
import styles from './DisplayedValues.module.css'
import {displayStylePropsType} from "../../App";

type DisplayedValuesType = {
    count: number
    incrementHandler: () => void
    resetHandler: () => void
    displayStyleProps: displayStylePropsType
    error: any
}


const DisplayedValues = (props: DisplayedValuesType) => {


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <span className={styles.spanTextSize} style={props.displayStyleProps.countMaxStyle}>{props.error || props.count }</span>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick = {props.incrementHandler} {...props.displayStyleProps.buttonPropsInc} >Inc</Button>
                <Button onClick={props.resetHandler} {...props.displayStyleProps.buttonPropsReset}>Reset</Button>
            </div>
        </div>
    );
};

export default DisplayedValues;