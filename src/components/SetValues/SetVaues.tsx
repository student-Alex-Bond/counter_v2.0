import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import styles from './SetValues.module.css'
import EnterValue from "../EnterValue/EnterValue";


type SetValuesProps = {
    onChangeMaxValueHandler: (maxValue: number) => void
    onChangeStartValueHandler: (startValue: number) => void
    setToLocalStorageHandler: () => void
    viewError: (flag: boolean) => void
    startValue: number
    maxValue: number

}

const SetValues = (props: SetValuesProps) => {
    // измение стилей кнопки и input
    const buttonSetStyleProps = {
        disabled: false,
        style: {}
    }

    // условие для проверки правильности ввода значений в input

    let inputStyle = styles.inputNormal

    if (props.maxValue === props.startValue || props.maxValue < props.startValue) {
        props.viewError(true)
        buttonSetStyleProps.disabled = true
        buttonSetStyleProps.style = {opacity: '0.5'}
        inputStyle = styles.inputError
    } else {
        props.viewError(false)
    }

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        const newMaxValue = event.currentTarget.valueAsNumber
        if (newMaxValue) {
            props.onChangeMaxValueHandler(newMaxValue)
        }
    }

    const changeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const newStartValue = event.currentTarget.valueAsNumber
        if (newStartValue) {
            props.onChangeStartValueHandler(newStartValue)
        }
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>

                <EnterValue inputStyle={inputStyle}
                            maxValue={props.maxValue}
                            changeValue={changeMaxValue}
                            children={'max value'}/>

                <EnterValue inputStyle={inputStyle}
                            maxValue={props.startValue}
                            changeValue={changeStartValue}
                            children={'start value'}/>


            </div>
            <div className={styles.wrapperButton}>
                <Button onClick={props.setToLocalStorageHandler}
                        {...buttonSetStyleProps}>Set
                </Button>
            </div>
        </div>
    );
};

export default SetValues;