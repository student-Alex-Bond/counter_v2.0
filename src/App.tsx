import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import SetValues from "./components/SetValues/SetVaues";
import DisplayedValues from "./components/DisplayedValues/DisplayedValues";


function App() {

// component DisplayedValues
    let newCount: number = 0
    let newMaxValue: number = 0

    const parseValueLocalStorage = (value: string) => {
        let newCountAsString = localStorage.getItem(value)
        if (newCountAsString) {
            newCount = Number(JSON.parse(newCountAsString))

        }
        return newCount
    }

    let [count, setCount] = React.useState(parseValueLocalStorage('startValueKey'))

    const incrementHandler = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        setCount(0)
    }

// component SetValues


    let InitialMaxValue = String(parseValueLocalStorage('maxValueKey'))
    // let InitialMaxValueAsString = localStorage.getItem('maxValueKey')
    // if (InitialMaxValueAsString) {
    //     InitialMaxValue = JSON.parse(InitialMaxValueAsString)
    // }

    let InitialStartValue = String(parseValueLocalStorage('startValueKey'))
    // let InitialStartValueAsString = localStorage.getItem('startValueKey')
    // if (InitialStartValueAsString) {
    //     InitialStartValue = JSON.parse(InitialStartValueAsString)
    // }


    let [maxValue, setMaxValue] = React.useState<string>(InitialMaxValue)
    let [startValue, setStartValue] = React.useState<string>(InitialStartValue)




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

    // Object Props
    const DisplayedValuesProps = {
        count: count,
        incrementHandler: incrementHandler,
        resetHandler: resetHandler
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
