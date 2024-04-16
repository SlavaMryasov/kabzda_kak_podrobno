import { action } from "@storybook/addon-actions";
import UncontrolledAccordion from "./AccordionWithReducer";

export default {
  title: "Uncontrolled accordion stories",
  component: UncontrolledAccordion,
};

export const AccordionUncontrolled = () => {
  return <UncontrolledAccordion titleValue="Uncontrolled" />;
};
