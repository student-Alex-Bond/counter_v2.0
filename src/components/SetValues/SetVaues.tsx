import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import InputValues from "../InputValues/InputValues";
import styles from './SetValues.module.css'
import {setValuesStylePropsType} from "../../App";

type SetValuesProps = {
    onChangeMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setToLocalStorageHandler: () => void
    startValue: number
    maxValue: number
    setValuesStyleProps: setValuesStylePropsType
}

const SetValues = (props: SetValuesProps) => {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <InputValues setValuesStyleProps={props.setValuesStyleProps} value={props.maxValue.toString()} onChange={props.onChangeMaxValueHandler} >max value</InputValues>
                <InputValues setValuesStyleProps={props.setValuesStyleProps} value={props.startValue.toString()} onChange={props.onChangeStartValueHandler}>start value</InputValues>
            </div>
            <div className={styles.wrapperButton}>
                <Button {...props.setValuesStyleProps.buttonPropsSetValue} onClick={props.setToLocalStorageHandler}>Set</Button>
            </div>
        </div>
    );
};

export default SetValues;