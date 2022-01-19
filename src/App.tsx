import React, {useEffect} from 'react';
import './App.css';
import SetValues from "./components/SetValues/SetVaues";
import DisplayedValues from "./components/DisplayedValues/DisplayedValues";


function App() {
//debugger

    // функция парсигна localStorage
    const parseValueLocalStorage = (value: string) => {
        let parseCountToLocalStorage = 0
        let countAsString = localStorage.getItem(value)
        if (countAsString) {
            parseCountToLocalStorage = Number(JSON.parse(countAsString))
        }
        return parseCountToLocalStorage
    }
    // state счетчика
    let [count, setCount] = React.useState<number>(parseValueLocalStorage('startValueKey'))

    // state блока усановок
    let [maxValue, setMaxValue] = React.useState<number>(parseValueLocalStorage('maxValueKey'))
    let [startValue, setStartValue] = React.useState<number>(parseValueLocalStorage('startValueKey'))

    // state блока с ошибками и сообщениями
    let [isMessage, setIsMessage] = React.useState<boolean>(false)
    let [error, setIsError] = React.useState(false)
    // Обработчики Событий

    // увеличение или умеьшенине значения value
    const incrementHandler = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        setCount(startValue)
    }

    const viewError = (flag: boolean) => {
        setIsError(flag)
    }


    const onChangeMaxValueHandler = (maxValue: number) => {
        setMaxValue(maxValue)
        setIsMessage(true)
    }

    const onChangeStartValueHandler = (startValue: number) => {
        setStartValue(startValue)
        setIsMessage(true)

    }

    const setToLocalStorageHandler = () => {
        //debugger
        localStorage.setItem('maxValueKey', JSON.stringify(maxValue))
        localStorage.setItem('startValueKey', JSON.stringify(startValue))

        let newCountStartValue = parseValueLocalStorage('startValueKey')
        setCount(newCountStartValue)
        setIsMessage(false)

    }

    // ho0c useEffect

    useEffect(() => {
        setCount(startValue)

    }, [startValue])


    return (
        <div className="App">
            <header className="App-header">
                <SetValues onChangeMaxValueHandler={onChangeMaxValueHandler}
                           onChangeStartValueHandler={onChangeStartValueHandler}
                           setToLocalStorageHandler={setToLocalStorageHandler}
                           startValue={startValue}
                           maxValue={maxValue}
                           viewError={viewError}
                />

                <DisplayedValues count={count}
                                 maxValue={maxValue}
                                 incrementHandler={incrementHandler}
                                 resetHandler={resetHandler}
                                 isMessage={isMessage}
                                 error={error}
                />
            </header>
        </div>
    );
}

export default App;
