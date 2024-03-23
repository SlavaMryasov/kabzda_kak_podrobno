import React from "react";
import ReactDOM from "react-dom/client"; // библиотека, которая превращает jsx(js) в html
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <div>hello</div>
    <App /> // нарисуй компоненту App (или тег)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
  name: "slava",
  age: 10,
  address: {
    city: "kazan",
    country: "rus",
  },
};

let users = [
  {
    name: "slava",
    age: 10,
    address: {
      city: "kazan",
      country: "rus",
    },
  },

  {
    name: 'victor',
    age: 22,
    address: {
      city: 'minsk',
      country: 'bel'
    }
  }
];
// console.log(users[0].address.country);

let b // any, так не делать
let c: string // так делать 
b='dd';
b=12;
b=true;
c='2'

let k: Array<number> // говорим что k - это массив чисел
k = [1,2,3,4] // кроме чисел в массив ничего не засунем


let r: Array<number | string> // говорим, что в массиве r могут содержаться и строки и числа
r=[1,2,3,'4',5]