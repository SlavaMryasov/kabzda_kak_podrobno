
type AccordionPropsType = {
    accordionTitle: string
    collapsed?: boolean
}

export const Accordion = ({accordionTitle, collapsed}: AccordionPropsType) => {
    console.log('accordion rendering')
    return (
        <div>
        {!collapsed 
        ? <><AccordionTitle accordionTitle={accordionTitle}/><AccordionBody/></>
        : <AccordionTitle accordionTitle={accordionTitle}/>}
    </div>
    )
  }



  const AccordionTitle = (props: AccordionPropsType) => {
    console.log('title rendering')
    return (
      <h3>{props.accordionTitle}</h3>
    )
  }
  
  const AccordionBody = () => {
    console.log('body rendering')
    return (
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
    )
  }
  
  