import React from 'react';
import Button from "../Button/Button";
import styles from './DisplayedValues.module.css'



type DisplayedValuesType = {
    count: number
    maxValue: number
    incrementHandler: () => void
    resetHandler: () => void
    isMessage: boolean
    error: boolean
}


const DisplayedValues = (props: DisplayedValuesType) => {
    // debugger


    //
    const buttonStyleIncProps = {
        disabled: false,
        style: {}
    }
    const buttonStyleResetProps = {
        disabled: false,
        style: {}
    }


    // условие по которому если приходит error = true становятся неактиные кнопки
    let spanTextSize = styles.spanText
    if (props.error) {
        buttonStyleIncProps.disabled = true
        buttonStyleResetProps.disabled = true
        buttonStyleIncProps.style = {opacity: '0.5'}
        buttonStyleResetProps.style = {opacity: '0.5'}

    }


    // условие по которому цвет max значения счетика становится красным и кнопка не активной
    if (props.count === props.maxValue) {
        spanTextSize = styles.spanTextSizeBig
        buttonStyleIncProps.disabled = true
        buttonStyleIncProps.style = {opacity: '0.5'}
    }
    let ViewValue = props.error
        ? <span className={styles.spanTextIncorrectValue}>Incorrect value</span>
        : props.isMessage
            ? <span className={styles.spanText}>Press 'Set' apply value</span>
            : props.count

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <span className={spanTextSize}>
                    {ViewValue}
                </span>
            </div>

            <div className={styles.wrapperButton}>
                <Button onClick={props.incrementHandler} {...buttonStyleIncProps}>
                    Inc
                </Button>
                <Button onClick={props.resetHandler} {...buttonStyleResetProps}>
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default DisplayedValues;