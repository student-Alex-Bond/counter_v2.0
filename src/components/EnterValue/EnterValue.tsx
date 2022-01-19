import React, {ChangeEvent} from 'react';
import styles from "../SetValues/SetValues.module.css";

type EnterValueProps = {
    children: string
    inputStyle: string
    maxValue: number
    changeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const EnterValue = (props: EnterValueProps) => {
    return (
            <div className={styles.wrapper}>
                <span className={styles.spanText}>{props.children}:</span>
                <input className={props.inputStyle}
                       value={props.maxValue}
                       onChange={props.changeValue}
                       type='number'/>
            </div>

    );
};

export default EnterValue;