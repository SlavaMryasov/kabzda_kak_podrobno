import { ChangeEvent, memo, useCallback, useMemo, useState } from "react"
import { v1 } from "uuid"

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  accordionTitle?: string
  collapsed: boolean,
  setCollapsedAccordion: (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => void
  items: ItemType[]

}



export const Accordion = ({ collapsed, items, setCollapsedAccordion }: AccordionPropsType) => {
  console.log('accordion rendering')

  const [editStatus, setEditStatus] = useState(false)
  const [accordionTitle, setAccordionTitle] = useState('Menu')

  const changeEditStatus = () => {
    setEditStatus(!editStatus)
  }

  const changeTitle = (value: string) => {
    setAccordionTitle(value)
  }

  const memoItems = useMemo(() => items, [items])

  return (
    <div>
      свернуть и развернуть можно с помощью ctrl и клика
      {!editStatus
        ? <AccordionTitle setCollapsedAccordion={(e) => setCollapsedAccordion(e)} accordionTitle={accordionTitle} collapsed={collapsed} editStatus={editStatus} setEditStatus={setEditStatus} />
        : <input autoFocus value={accordionTitle} onDoubleClick={changeEditStatus} onChange={(e) => changeTitle(e.currentTarget.value)} onBlur={changeEditStatus} />
      }

      {!collapsed && <AccordionBodyMemo items={memoItems} />}
    </div>
  )
}


//title
type AccordionTitlePropsType = {
  accordionTitle: string
  collapsed?: boolean
  setCollapsedAccordion: (e: React.MouseEvent<HTMLHeadingElement>) => void
  editStatus: boolean
  setEditStatus: (editStatus: boolean) => void
}

const AccordionTitle = ({ setCollapsedAccordion, collapsed, editStatus, setEditStatus, ...props }: AccordionTitlePropsType) => {
  return (
    <h3 onClick={setCollapsedAccordion} onDoubleClick={() => setEditStatus(!editStatus)}>{props.accordionTitle}</h3>
  )
}

//body
export type AccordionBodyPropsType = {
  items: ItemType[]
}

const AccordionBody = ({ items }: AccordionBodyPropsType) => {
  console.log('body rendering')
  return (
    <ul>
      {items.map((el, i) => <li key={i} >{el.title}</li>)}
    </ul>
  )
}

const AccordionBodyMemo = memo(AccordionBody)