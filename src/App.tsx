import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import SetValues from "./components/SetValues/SetVaues";
import DisplayedValues from "./components/DisplayedValues/DisplayedValues";

export type displayStylePropsType = typeof displayStyleProps

const displayStyleProps = {
    countMaxStyle: {},
    buttonPropsInc: {
        style: {},
        disabled: false
    },
    buttonPropsReset: {
        style: {},
        disabled: false
    }
}

export type setValuesStylePropsType = typeof setValuesStyleProps
const setValuesStyleProps = {
    style: {},
    buttonPropsSetValue: {
        style: {},
        disabled: false
    }
}

function App() {

// component DisplayedValues

    let newCount: number = 0
    let newMaxValue: number = 0

    // функция парсигна localStorage
    const parseValueLocalStorage = (value: string) => {
        let newCountAsString = localStorage.getItem(value)
        if (newCountAsString) {
            newCount = Number(JSON.parse(newCountAsString))
        }
        return newCount
    }

    newCount = parseValueLocalStorage('startValueKey')
    newMaxValue = parseValueLocalStorage('maxValueKey')

    let [count, setCount] = React.useState(newCount)

    const incrementHandler = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        setCount(startValue)
    }


// component SetValues
    let InitialMaxValue = parseValueLocalStorage('maxValueKey')
    let InitialStartValue = parseValueLocalStorage('startValueKey')

    let [maxValue, setMaxValue] = React.useState<number>(InitialMaxValue)
    let [startValue, setStartValue] = React.useState<number>(InitialStartValue)

    // блок с ошибками

    let error: any = ''
    if (startValue === maxValue || maxValue < startValue || startValue <=-1 || maxValue <=-1) {
        error = <span
            style={{color: 'red', fontSize: '60px', fontWeight: 'bold'}}>Incorrect value
        </span>
        displayStyleProps.buttonPropsReset.disabled = true
        displayStyleProps.buttonPropsInc.disabled = true
        displayStyleProps.buttonPropsReset.style = {opacity: '0.5'}
        setValuesStyleProps.style = {backgroundColor: 'red', border: 'red'}
        setValuesStyleProps.buttonPropsSetValue.disabled = true
        setValuesStyleProps.buttonPropsSetValue.style = {opacity: '0.5'}
    } else {
        // обнуление стилей Displayed component
        displayStyleProps.buttonPropsReset.style = {}
        displayStyleProps.buttonPropsReset.disabled = false

        // обнуление стилей SetValue component
        setValuesStyleProps.style = {}
        setValuesStyleProps.buttonPropsSetValue.style = {}
        setValuesStyleProps.buttonPropsSetValue.disabled = false

    }


    // изменение стилей

    // стили для DisplayedValues component
    displayStyleProps.countMaxStyle = count === Number(maxValue) ? {
        color: 'red',
        fontSize: '125px',
        fontWeight: 'bold'
    } : {}
    displayStyleProps.buttonPropsInc.style = count === Number(maxValue) ? {opacity: '0.5'} : {}
    displayStyleProps.buttonPropsInc.disabled = count === Number(maxValue)


    // Обработчики Событий
    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let maxValueAsString = event.currentTarget.value
        if (maxValueAsString) {
            maxValue = Number(maxValueAsString)
            setMaxValue(maxValue)
        }

    }

    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let startValueAsString = event.currentTarget.value
        if(startValueAsString) {
            startValue = Number(startValueAsString)
            setStartValue(startValue)
        }

    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
        localStorage.setItem('startValueKey', JSON.stringify(startValue))

        newCount = parseValueLocalStorage('startValueKey')
        setCount(newCount)
        newMaxValue = parseValueLocalStorage('maxValueKey')
    }


    // hoc useEffect

    useEffect(() => {
        setCount(newCount)
    }, [newCount, newMaxValue])

    // Objects props for components
    const DisplayedValuesProps = {
        count: count,
        incrementHandler: incrementHandler,
        resetHandler: resetHandler,
        displayStyleProps: displayStyleProps,
        error: error
    }

    const SetValuesProps = {
        onChangeMaxValueHandler: onChangeMaxValueHandler,
        onChangeStartValueHandler: onChangeStartValueHandler,
        setToLocalStorageHandler: setToLocalStorageHandler,
        startValue: startValue,
        maxValue: maxValue,
        setValuesStyleProps: setValuesStyleProps

    }


    return (
        <div className="App">
            <header className="App-header">
                <SetValues {...SetValuesProps}/>
                <DisplayedValues {...DisplayedValuesProps}/>
            </header>
        </div>
    );
}

export default App;
