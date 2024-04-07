import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";
import { OnOff } from './components/onOff/OnOff'
import { useState } from "react"



const App = () => {
  // функция с большой буквы и возвращающая jsx - компонента
  const [stateButton, setStateButton] = useState(false)
  const [collapsed, setCollapsedAccordion] = useState(true)
  const [num, setNum] = useState< 0 | 1 | 2 | 3 | 4 | 5 >(0);
  return <div>
    <AppTitle value={'This is APP Component'}/>
    
    <Accordion accordionTitle={'Menu'} collapsed={collapsed} 
    setCollapsedAccordion={setCollapsedAccordion}/>
    <OnOff on={stateButton} onChange={setStateButton}/>
    {stateButton.toString()}
    <Rating num={num} setNum={setNum}/>
    </div>;
};

type AppTitlePropsType = {
  value: string
}

const AppTitle = (props: AppTitlePropsType) => {
  return (
    <>{props.value}</>
  )
}





export default App;


