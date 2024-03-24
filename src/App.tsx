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
  return <div>
    <AppTitle value={'This is APP Component'}/>
    
    <Accordion accordionTitle={'Menu'} collapsed={collapsed} 
    setCollapsedAccordion={setCollapsedAccordion}/>
    {/* <Rating value={1}/>
    <Rating value={2}/>
    <Rating value={3}/>
    <Rating value={4}/>
    <Rating value={5}/> */}
    <OnOff on={stateButton} setStateButton={setStateButton}/>
    <Rating />
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


