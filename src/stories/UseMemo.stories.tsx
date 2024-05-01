import { useMemo, useState, memo, useEffect } from "react"

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



export const CitiesMemo = () => {

    let [count, setCount] = useState(0)
    const setCountHandler = () => {
        setCount(count += 1)
    }

    useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= 5; i++) {
            let fake = 0
            while (fake < 25000000) {
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
    }, [count])



    type CityType = {
        city: string;
        country: string;
        people: number;
    };

    type FilterType = 'all' | 'Russia' | 'Belarus' | 'million';

    let initialState: CityType[] = [
        { city: 'Moscow', country: 'Russia', people: 17 },
        { city: 'Minsk', country: 'Belarus', people: 1.9 },
        { city: 'Kazan', country: 'Russia', people: 1.3 },
        { city: 'Grodno', country: 'Belarus', people: 0.5 },
        { city: 'Novosibirsk', country: 'Russia', people: 1.5 },
    ];

    const [filter, setFilter] = useState<FilterType>('all');
    const [cities, setCities] = useState<CityType[]>(initialState);

    useEffect(() => {
        console.log('filt')
        let filteredCities: CityType[];
        switch (filter) {
            case 'Belarus':
                filteredCities = initialState.filter(el => el.country === 'Belarus');
                break;
            case 'Russia':
                filteredCities = initialState.filter(el => el.country === 'Russia');
                break;
            case 'million':
                filteredCities = initialState.filter(el => el.people > 1);
                break;
            case 'all':
            default:
                filteredCities = initialState;
                setCountHandler()
        }
        setCities(filteredCities);
    }, [filter]); // Зависимость от filter, чтобы пересчитывать города при его изменении

    return (
        <>
            <button onClick={() => setFilter('all')}>all</button>
            <button onClick={() => setFilter('Belarus')}>Belarus</button>
            <button onClick={() => setFilter('Russia')}>Russia</button>
            <button onClick={() => setFilter('million')}>million</button>
            <ul>
                {cities.map((el, index) => <li key={index}>{el.city}</li>)}
            </ul>
            {count}
            <button onClick={setCountHandler}>+</button>
        </>
    );
};






export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'html'])


    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => {
        const newBooks = [...books, 'angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book books={newArray} addBook={addBook} />
    </>
}


const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('USERS SECRET')
    return <div>
        <button onClick={() => props.addBook()}>add user</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}</div>
}
const Book = memo(BooksSecret)
