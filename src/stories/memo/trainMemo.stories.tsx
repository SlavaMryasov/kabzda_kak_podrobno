import { memo, useMemo, useState } from "react"
import { v1 } from "uuid"

export default {
    title: 'train memo'
}

type UserType = {
    id: string
    name: string
    age: number
}
type UsersType = {
    users: UserType[]
}
type CounterType = {
    count: number
    setCount: () => void
}

const initialUsers: UserType[] = [
    { id: v1(), name: 'slava', age: 27 },
    { id: v1(), name: 'dima', age: 25 },
    { id: v1(), name: 'sveta', age: 40 },
]

export const TrainMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(initialUsers)

    const countHandler = () => {
        setCount(count + 1)
    }


    let usersMemo = useMemo(() => {
        return users.map(el => el)
    }, [users])
    return (
        <>
            <Counter count={count} setCount={countHandler} />
            <UsersListMemo users={usersMemo} />
        </>
    )
}

const Counter = ({ count, setCount }: CounterType) => {
    console.log('counter render')
    return (
        <div>
            {count}
            <button onClick={setCount}>+</button>
        </div>
    )
}

const UsersList = ({ users }: UsersType) => {
    console.log('list render')
    const usersMemo = useMemo(() => {
        return users.map(u => <li key={u.id} style={{ 'listStyle': 'none' }}>{u.name}</li>)
    }, [users])
    return (
        <ul>
            {usersMemo}
        </ul>
    )
}

const UsersListMemo = memo(UsersList)
