import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import InputValues from "../InputValues/InputValues";
import styles from './SetValues.module.css'

type SetValuesProps = {
    onChangeMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
    setToLocalStorageHandler: () => void
    startValue: string
    maxValue: string
}

const SetValues = (props: SetValuesProps) => {

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>
                <InputValues value={props.maxValue} onChange={props.onChangeMaxValueHandler}>max value</InputValues>
                <InputValues value={props.startValue} onChange={props.onChangeStartValueHandler}>start value</InputValues>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick={props.setToLocalStorageHandler}>Set</Button>
            </div>
        </div>
    );
};

export default SetValues;