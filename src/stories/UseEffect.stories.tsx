import { useEffect, useState } from "react"


export default {
    title: 'useEffect',
}

const initialValue = () => {
    console.log('initialValue')
    return 122
}

export const Example1 = () => {
    console.log('example1')
    const [counter, setCounter] = useState(initialValue)
    const [fake, setFake] = useState(1)

    const inc = (state: number) => state + 1

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            {counter}
            <button onClick={() => setCounter(inc)}>+</button>
            {fake}
            <button onClick={() => setFake(fake + 1)}>fake</button>
        </>
    )
}

export const Example2 = () => {
    console.log('example2')

    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)

    const incTime = (state: number) => {
        if (state === 59) {
            setMin(min + 1)
            setSec(0)
        }
        return state + 1
    }

    useEffect(() => {
        setInterval(() => setSec(incTime), 1000)
    }, [])

    return (
        <>
            <div>{min}:{sec}</div>
        </>
    )
}
