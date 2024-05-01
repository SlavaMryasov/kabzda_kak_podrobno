import { memo, useState } from "react"


export default {
    title: 'react memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['slava', 'katya', 'dima'])

    const addUser = () => {
        setUsers([...users, 'masha'])
    }

    const plus = () => {
        setCounter(counter + 1)
        addUser()
    }

    return <>
        <button onClick={plus}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users} />
    </>
}