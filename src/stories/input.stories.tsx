import { ChangeEvent, useRef, useState } from "react";
import { OnOff } from "../components/onOff/onOff"
import { action } from "@storybook/addon-actions";


export default {
    title: 'input',
    component: OnOff
}
export const UncontrolledInput = () => <input />;

export const UncontrolledInputWithTrackValue = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChange} />{value}</>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const ref = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = ref.current as HTMLInputElement
        setValue(el.value)
    }
    return <><input ref={ref} /><button onClick={save}>save</button>{value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const setParentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        action('want to change')()
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={setParentValueHandler} />

}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const setParentValueHandler = () => {
        action('want to change')()
        setParentValue(!parentValue)
    }
    return <input type="checkbox" checked={parentValue} onChange={setParentValueHandler} />
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<any>(null)
    const setPagentValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        action(e.currentTarget.value)()
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={setPagentValueHandler}>
        <option value="1">Minsk</option>
        <option value="2">Moskow</option>
        <option value="3">Kiev</option>
    </select>

}

export const ControlledInputWithFixedValue = () => <input value={'slava'} />