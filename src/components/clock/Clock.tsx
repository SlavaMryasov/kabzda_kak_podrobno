import { useEffect, useState } from "react"

type PropsType = {

}

const getString = (num: number) => num < 10 ? '0' + num : num


export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let interval = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const hoursString = getString(date.getHours())

    const minutesString = getString(date.getMinutes())

    const secondsString = getString(date.getSeconds())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}