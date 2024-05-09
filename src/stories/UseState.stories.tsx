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

    const changer = (state: number) => {
        console.log(state, 'state')
        return state + 1
    }

    return (
        <>
            {counter}
            <button onClick={() => setCounter(changer)}>+</button>
        </>
    )
} 