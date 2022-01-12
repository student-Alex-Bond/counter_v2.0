import React, {ChangeEvent} from 'react';
import styles from './InputValues.module.css'

type SetValueProps = {
    children: string
  value: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void

}

const InputValues = (props: SetValueProps) => {

    return (
        <div className={styles.wrapper}>
            <span style={styles}>{props.children}:</span>
            <input value = {props.value} onChange={props.onChange} type='number'/>
        </div>
    );
};

export default InputValues;