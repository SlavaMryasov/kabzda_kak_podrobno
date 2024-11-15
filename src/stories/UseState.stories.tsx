import { useMemo, useState } from "react"


export default {
    title: 'useState demo'
}

const generateData = () => {
    console.log('generate data')
    return 1546134677665
}

export const Example1 = () => {
    console.log('example1')

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => { // здесь стейтом будет являтся counter
        console.log(state, 'state')
        return state + 1
    }
    // при нажатии на кнопку реакт под капотом возьмет значение каунтер из сет каунтер и отдаст ее 
    // функции changer
    return (
        <>
            {counter}
            <button onClick={() => setCounter(changer)}>+</button>
        </>
    )
} 