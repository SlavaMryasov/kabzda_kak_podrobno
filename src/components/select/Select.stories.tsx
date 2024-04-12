import { useState } from "react";
import { Select } from "./Select";
import { action } from "@storybook/addon-actions";

export default {
    component: Select
}

const users = [{ title: 'slava', value: 1 },
{ title: 'katya', value: 2 },
{ title: 'igor', value: 3 }]

export const WorkingSelect = () => {
    const [parentValue, setParentValue] = useState<any>(users[0].title)
    const setParentValueHandler = (value: string) => {
        action(value)()
        setParentValue(value)
    }
    return (
        <div>
            <Select value={parentValue} onClick={setParentValueHandler} items={users} />
        </div>
    )
}