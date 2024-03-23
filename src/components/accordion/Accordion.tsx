
type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean,
    setCollapsedAccordion: (collapsed: boolean)=> void
   
}



export const Accordion = ({accordionTitle, collapsed, setCollapsedAccordion}: AccordionPropsType) => {
    console.log('accordion rendering')

    return (
        <div>
            <AccordionTitle setCollapsedAccordion={setCollapsedAccordion}
              accordionTitle={accordionTitle} 
              collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}        
        </div>
    )
  }



  type AccordionTitlePropsType = {
    accordionTitle: string
    collapsed?: boolean
    setCollapsedAccordion: (collapsed: boolean)=> void
}

  const AccordionTitle = ({setCollapsedAccordion,collapsed, ...props}: AccordionTitlePropsType) => {
    console.log('title rendering')

    const collapsedHandler = (collapsed: boolean) => {
        setCollapsedAccordion(collapsed)
    }

    return (
      <h3 onClick={()=>collapsedHandler(!collapsed)}>{props.accordionTitle}</h3>
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
  
  