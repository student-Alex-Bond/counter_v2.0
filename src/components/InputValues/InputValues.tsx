import React, {ChangeEvent} from 'react';
import styles from './InputValues.module.css'
import {setValuesStylePropsType} from "../../App";

type SetValueProps = {
    children: string
    value: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    setValuesStyleProps: setValuesStylePropsType
}

const InputValues = (props: SetValueProps) => {

    return (
        <div className={styles.wrapper}>
            <span style={styles}>{props.children}:</span>
            <input {...props.setValuesStyleProps} value={props.value} onChange={props.onChange} type='number'/>
        </div>
    );
};

export default InputValues;