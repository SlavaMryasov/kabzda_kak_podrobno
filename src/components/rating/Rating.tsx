import { useState } from "react"




export const Rating = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <Star num={1} selected={num > 0} setNum={setNum}/>
      <Star num={2} selected={num > 1} setNum={setNum}/>
      <Star num={3} selected={num > 2} setNum={setNum}/>
      <Star num={4} selected={num > 3} setNum={setNum}/>
      <Star num={5} selected={num > 4} setNum={setNum}/>
    </div>
  )
}


type StarPropsType = {
  selected?: boolean
  num: number
  setNum: (num: number) => void
}

const Star = ({selected,num, setNum}: StarPropsType) => {
  const handler = (num: number) => {
    setNum(num)
  }
  return (
    <span onClick={()=>handler(num)}>{selected ? <b>star-</b>: 'star-'}</span>
  )
}