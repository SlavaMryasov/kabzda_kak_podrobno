import { Accordion } from "./Accordion";
import { useState } from "react";
import {action} from '@storybook/addon-actions'


export default {
  component: Accordion,
};

const setCollapsedAccordionHandler = action('onChange')

export const CollapsedAccordion = () => {
  return (
    <div>
      <Accordion
        accordionTitle={"Menu"}
        collapsed={true}
        setCollapsedAccordion={setCollapsedAccordionHandler}
      />
    </div>
  );
};
export const OpenedAccordion = () => {
  return <div>
  <Accordion
    accordionTitle={"Menu"}
    collapsed={false}
    setCollapsedAccordion={()=> {}}
  />
</div>
};

export const AccordionDemo = () => {
  const [collapesed, setCollapsed] = useState(false)
  return <div>
  <Accordion
    accordionTitle={"Menu"}
    collapsed={collapesed}
    setCollapsedAccordion={()=> {setCollapsed(!collapesed)}}
  />
</div>
};

