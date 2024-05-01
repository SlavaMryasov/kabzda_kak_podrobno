import { action } from '@storybook/addon-actions';
import React, { useState } from "react";
import { Accordion } from "./Accordion";

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
      // onClick={onClickCallBack}
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
    // onClick={onClickCallBack}
    />
  </div>
};

export const WorkingAccordion = () => {
  const [collapesed, setCollapsed] = useState(false)

  const collapsedHandler = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (e.ctrlKey) {
      setCollapsed(!collapesed)
    }
  }

  return <div>
    <Accordion
      collapsed={collapesed}
      setCollapsedAccordion={(e) => collapsedHandler(e)}
      items={
        [{ title: 'slava', value: 6 },
        { title: 'katya', value: 2 },
        { title: 'igor', value: 3 }]
      }
    />
  </div>
};

