import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import SetValues from "./components/SetValues/SetVaues";
import DisplayedValues from "./components/DisplayedValues/DisplayedValues";

export type displayStylePropsType = typeof displayStyleProps

const displayStyleProps = {
    countMaxStyle: {},
    buttonProps: {
        style: {},
        disabled: false
    },
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
        setCount(0)
    }


// component SetValues
    let InitialMaxValue = String(parseValueLocalStorage('maxValueKey'))
    let InitialStartValue = String(parseValueLocalStorage('startValueKey'))

    let [maxValue, setMaxValue] = React.useState<string>(InitialMaxValue)
    let [startValue, setStartValue] = React.useState<string>(InitialStartValue)

    // изменение стилей

    // стили для DisplayedValues component
    displayStyleProps.countMaxStyle = count === Number(maxValue) ? {
        color: 'red',
        fontSize: '125px',
        fontWeight: 'bold'
    } : {}
    displayStyleProps.buttonProps.style = count === Number(maxValue) ? {opacity: '0.5'} : {}
    displayStyleProps.buttonProps.disabled = count === Number(maxValue)


    // Обработчики Событий
    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        maxValue = event.currentTarget.value
        setMaxValue(maxValue)
    }

    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        startValue = event.currentTarget.value
        setStartValue(startValue)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
        localStorage.setItem('startValueKey', JSON.stringify(startValue))


        newCount = parseValueLocalStorage('startValueKey')
        setCount(newCount)
        newMaxValue = parseValueLocalStorage('maxValueKey')
        // let newCountAsString = localStorage.getItem('startValueKey')
        // if (newCountAsString) {
        //     newCount = Number(JSON.parse(newCountAsString))
        //     setCount(newCount)
        // }
        // let maxValueAsString = localStorage.getItem('maxValueKey')
        // if (maxValueAsString) {
        //     newMaxValue = Number(JSON.parse(maxValueAsString))
        // }

    }

    useEffect(() => {
        setCount(newCount)
    }, [newCount])

    // Objects Props
    const DisplayedValuesProps = {
        count: count,
        incrementHandler: incrementHandler,
        resetHandler: resetHandler,
        displayStyleProps: displayStyleProps,
    }

    const SetValuesProps = {
        onChangeMaxValueHandler: onChangeMaxValueHandler,
        onChangeStartValueHandler: onChangeStartValueHandler,
        setToLocalStorageHandler: setToLocalStorageHandler,
        startValue: startValue,
        maxValue: maxValue

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
