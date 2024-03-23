import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";



const App = () => {
  // функция с большой буквы и возвращающая jsx - компонента
  return <div>
    <AppTitle value={'This is APP Component'}/>
    <Rating value={3}/>
    <Accordion accordionTitle={'Menu'} collapsed={false}/>
    <Rating value={1}/>
    <Rating value={2}/>
    <Rating value={3}/>
    <Rating value={4}/>
    <Rating value={5}/>
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
