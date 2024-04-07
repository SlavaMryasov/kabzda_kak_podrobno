import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { useState } from "react";
import {action} from '@storybook/addon-actions'


// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };

// export default meta;

// type Story = StoryObj<typeof Accordion>

// export const FirstStory: Story = {
//   args: {
//     accordionTitle: 'hello',
//     collapsed: true,
//     setCollapsedAccordion: ()=> {}
//   }
// }

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

