
type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({ value, items, onChange }: SelectPropsType) => {
    return (
        <div>

        </div>
    )
}