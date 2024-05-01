import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import { TOGGLE_COLLAPSED } from "./reducer";

type UncontrolledAccordionProps = {
  titleValue: string;
};


function UncontrolledAccordion(props: UncontrolledAccordionProps) {
  console.log("Accordion rendered");

  // const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      <AccordionTitle
        // title={props.titleValue}onToggle={() =>  setCollapsed((c) => !c)}
        title={props.titleValue} onToggle={() => dispatch({ type: TOGGLE_COLLAPSED })}

      />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitleProps = {
  title: string;
  onToggle: () => void;
};

function AccordionTitle(props: AccordionTitleProps) {
  console.log("AccordionTitle rendered");
  return <h3 onClick={props.onToggle}>{props.title}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendered");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default UncontrolledAccordion;
