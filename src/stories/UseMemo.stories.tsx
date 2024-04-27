import { useMemo, useState, memo } from "react"

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 20000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
        <hr />
        <div>result a: {resultA}</div>
        <div>result b {resultB}</div>
    </>
}



const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}
const Users = memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['slaba', 'dima', 'valera'])


    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray} />
    </>
}

export const MemoCities = () => {
    type CityType = {
        city: string
        people: number
    }
    type LocationType = {
        country: string
        cities: CityType[]
        people: number
    }
    const initialLocations: LocationType[] = [
        {
            country: 'Russia',
            cities: [
                { city: 'Moscow', people: 17 },
                { city: 'Kazan', people: 1.3 },
                { city: 'Ekb', people: 1.5 },
            ],
            people: 144
        },
        {
            country: 'Belarus',
            cities: [
                { city: 'Minsk', people: 1.9 },
                { city: 'Gomel', people: 0.5 },
                { city: 'Vitebsk', people: 0.3 },
            ],
            people: 9.2
        },
    ]
    type FilterValuesType = 'all' | 'Russia' | 'Belarus' | 'o' | 'count'
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const [locations, setLocations] = useState(initialLocations)
    console.log(filter)
    return (
        <div>
            {/* {locations.map(el => <div key={el.country}>{el.country}</div>)} */}
            {filter === 'Russia' ? locations.filter(el => el.country !== filter)}
            <button onClick={() => setFilter('all')}>all</button>
            <button onClick={() => setFilter('Russia')}>Russia</button>
            <button onClick={() => setFilter('Belarus')}>Belarus</button>
            <button onClick={() => setFilter('o')}>o</button>
            <button onClick={() => setFilter('count')}>count bigger than 1</button>
        </div>
    )
}