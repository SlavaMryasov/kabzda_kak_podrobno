import React, { useState, KeyboardEvent, useEffect } from "react"
import s from './Select.module.css'

type ItemType = {
    value: string
    title: string
}

type SelectPropsType = {
    value?: any,
    items: ItemType[]
    onChange: (value: any) => void
}

export const Select: React.FC<SelectPropsType> = ({ items, value, onChange }) => {
    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp")
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
                if (!selectedItem) {
                    onChange(items[0].value)
                }

            }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {items.map(i => <div
                            onMouseEnter={() => { setHoveredElementValue(i.value) }}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            key={i.value} onClick={() => onItemClick(i.value)}>{i.title}</div>)}
                    </div>
                }
            </div>

        </>
    )
}