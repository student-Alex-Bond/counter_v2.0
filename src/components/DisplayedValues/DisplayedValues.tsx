import React from 'react';
import Button from "../Button/Button";
import styles from './DisplayedValues.module.css'


type DisplayedValuesType = {
    count: number
    maxValue: number
    incrementHandler: () => void
    resetHandler: () => void
    isMessage: boolean
}


const DisplayedValues = (props: DisplayedValuesType) => {
   // debugger
    // изменение цвета значения счетчика при достижении maxValue
    const buttonStyleProps = {
        disabled: false,
        style: {}
    }
    let spanTextSize = styles.spanText

    if (props.count === props.maxValue) {
        spanTextSize = styles.spanTextSizeBig
        buttonStyleProps.disabled = true
        buttonStyleProps.style = {opacity: '0.5'}
    }
let ViewValue = props.isMessage ? " Press 'Set' apply value " : props.count

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <span className={spanTextSize}>
                    {ViewValue}
                </span>
            </div>

            <div className={styles.wrapperButton}>
                <Button onClick={props.incrementHandler} {...buttonStyleProps}>
                    Inc
                </Button>
                <Button onClick={props.resetHandler}>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default DisplayedValues;