import { v1 } from "uuid"

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  accordionTitle: string
  collapsed: boolean,
  setCollapsedAccordion: (collapsed: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
}



export const Accordion = ({ accordionTitle, collapsed, items, setCollapsedAccordion, onClick }: AccordionPropsType) => {
  console.log('accordion rendering')

  return (
    <div>
      <AccordionTitle setCollapsedAccordion={setCollapsedAccordion}
        accordionTitle={accordionTitle}
        collapsed={collapsed} />
      {!collapsed && <AccordionBody items={items} onClick={onClick} />}
    </div>
  )
}



type AccordionTitlePropsType = {
  accordionTitle: string
  collapsed?: boolean
  setCollapsedAccordion: (collapsed: boolean) => void
}

const AccordionTitle = ({ setCollapsedAccordion, collapsed, ...props }: AccordionTitlePropsType) => {
  const collapsedHandler = (collapsed: boolean) => {
    setCollapsedAccordion(collapsed)
  }
  return (
    <h3 onClick={() => collapsedHandler(!collapsed)}>{props.accordionTitle}</h3>
  )
}



export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody = ({ items, onClick }: AccordionBodyPropsType) => {
  console.log('body rendering')
  return (
    <ul>
      {items.map(el => <li key={v1()} onClick={() => { onClick(el.value) }}>{el.title}</li>)}
    </ul>
  )
}

