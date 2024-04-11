import { Accordion } from "./Accordion";
import { useState } from "react";
import { action } from '@storybook/addon-actions'


export default {
  component: Accordion,
};

const setCollapsedAccordionHandler = action('onChange')
const onClickCallBack = action('some item was clicked')

export const CollapsedAccordion = () => {
  return (
    <div>
      <Accordion
        accordionTitle={"Menu"}
        collapsed={true}
        setCollapsedAccordion={setCollapsedAccordionHandler}
        items={[]}
        onClick={onClickCallBack}
      />
    </div>
  );
};
export const OpenedAccordion = () => {
  return <div>
    <Accordion
      accordionTitle={"Menu"}
      collapsed={false}
      setCollapsedAccordion={() => { }}
      items={
        [{ title: 'slava', value: 1 },
        { title: 'katya', value: 2 },
        { title: 'igor', value: 3 }]
      }
      onClick={onClickCallBack}
    />
  </div>
};

export const WorkingAccordion = () => {
  const [collapesed, setCollapsed] = useState(false)
  return <div>
    <Accordion
      accordionTitle={"Menu"}
      collapsed={collapesed}
      setCollapsedAccordion={() => { setCollapsed(!collapesed) }}
      items={
        [{ title: 'slava', value: 1 },
        { title: 'katya', value: 2 },
        { title: 'igor', value: 3 }]
      }
      onClick={onClickCallBack}
    />
  </div>
};

