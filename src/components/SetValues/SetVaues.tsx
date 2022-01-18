import React, {ChangeEvent} from 'react';
import Button from "../Button/Button";
import styles from './SetValues.module.css'


type SetValuesProps = {
    onChangeMaxValueHandler: (maxValue: number) => void
    onChangeStartValueHandler: (startValue: number) => void
    setToLocalStorageHandler: () => void
    startValue: number
    maxValue: number

}

const SetValues = (props: SetValuesProps) => {

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>)=> {
        const newMaxValue = event.currentTarget.valueAsNumber
        if (newMaxValue) {
            props.onChangeMaxValueHandler(newMaxValue)
        }
    }

    const changeStartValue = (event: ChangeEvent<HTMLInputElement>)=> {
        const newStartValue = event.currentTarget.valueAsNumber
        if (newStartValue) {
            props.onChangeStartValueHandler(newStartValue)
        }
    }

            return (
        <div className={styles.mainWrapper}>
            <div className={styles.wrapperValue}>

                <div className={styles.wrapper}>
                    <span style={styles}>max value:</span>
                    <input value={props.maxValue}  onChange={changeMaxValue} type='number'/>
                </div>

                <div className={styles.wrapper}>
                    <span style={styles}>start value:</span>
                    <input value={props.startValue} onChange={changeStartValue} type='number'/>
                </div>
            </div>
            <div className={styles.wrapperButton}>
                <Button onClick={props.setToLocalStorageHandler}>Set</Button>
            </div>
        </div>
    );
};

export default SetValues;