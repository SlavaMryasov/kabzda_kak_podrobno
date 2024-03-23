
type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

 export const Rating = ({value}: RatingPropsType) => {
    // if(value ===1){}
    return (
      <div>
        <Star selected/>
        <Star/>
        <Star selected/>
        <Star/>
        <Star/>
      </div>
    );
  };
  

  type StarPropsType = {
    selected?: boolean
  }

  const Star = ({selected}: StarPropsType) => {
    return (
      <span>{selected ? <b>star-</b>: 'star-'}</span>
    )
  }
  