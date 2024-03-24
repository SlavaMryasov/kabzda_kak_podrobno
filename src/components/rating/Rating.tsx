

type RatingPropsType = {
  num: 0| 1 | 2 | 3 | 4 | 5
  setNum: (num: 0| 1 | 2 | 3 | 4 | 5) => void
}

export const Rating = ({num, setNum}: RatingPropsType) => {
  
  return (
    <div>
      <Star selected={num > 0} setNum={() => setNum(1)} />
      <Star selected={num > 1} setNum={() => setNum(2)} />
      <Star selected={num > 2} setNum={() => setNum(3)} />
      <Star selected={num > 3} setNum={() => setNum(4)} />
      <Star selected={num > 4} setNum={() => setNum(5)} />
    </div>
  );
};

type StarPropsType = {
  selected?: boolean;
  setNum: () => void;
};

const Star = ({ selected, setNum }: StarPropsType) => {
  const handler = () => {
    setNum();
  };
  return (
    <span onClick={() => handler()}>{selected ? <b>star-</b> : "star-"}</span>
  );
};
