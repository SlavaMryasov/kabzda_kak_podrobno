import { useState } from "react";

type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

const [value, setValue] = useState(2)

 export const Rating = () => {
    return (
      <div>
        <Star selected={value > 0} setValue={setValue}/>
        <Star selected={value > 1} setValue={setValue}/>
        <Star selected={value > 2} setValue={setValue}/>
        <Star selected={value > 3} setValue={setValue}/>
        <Star selected={value > 4} setValue={setValue}/>
      </div>
    );
  };
  

  type StarPropsType = {
    selected?: boolean
    setValue: (value: RatingPropsType)=> void
  }



  const Star = ({selected, setValue}: StarPropsType) => {
    const handlerr = (value: RatingPropsType) => {
        setValue(value)
     }
    return (
      <span onClick={()=>handlerr(2)}>{selected ? <b>star-</b>: 'star-'}</span>
    )
  }
  