import { useState } from "react";
import { Select } from "./Select";
import { action } from '@storybook/addon-actions'

export default {
    title: "Select",
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <>
            <Select onChange={setValue}
                value={value}
                items={
                    [
                        { value: '1', title: 'kazan' },
                        { value: '2', title: 'moscow' },
                        { value: '3', title: 'kiev' },
                    ]} />
        </>)
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
        <>
            <Select onChange={setValue}
                value={value}
                items={
                    [
                        { value: '1', title: 'kazan' },
                        { value: '2', title: 'moscow' },
                        { value: '3', title: 'kiev' },
                    ]} />
        </>)
}