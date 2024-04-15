import { useState } from "react"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}

export const DivAsSelect = ({ value, items, onClick }: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <div onClick={() => setCollapsed(!collapsed)}>{value}</div>
            {!collapsed &&
                <div>{items.map(el => <div onClick={() => onClick(el.title)}>{el.title}</div>)}</div>
            }

        </div>
    )
}