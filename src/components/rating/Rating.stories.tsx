import { action } from "@storybook/addon-actions";
import { Rating, RatingValue } from "./Rating";
import { useState } from "react";

export default {
  title: "Rating stories",
  component: Rating,
};

export const EmptyRating = () => {
  return <Rating num={0} setNum={action("clicked")} />;
};
export const RatingOne = () => {
  return <Rating num={1} setNum={action("clicked")} />;
};
export const RatingTwo = () => {
  return <Rating num={2} setNum={action("clicked")} />;
};
export const RatingThree = () => {
  return <Rating num={3} setNum={action("clicked")} />;
};
export const RatingFour = () => {
  return <Rating num={4} setNum={action("clicked")} />;
};
export const RatingFive = () => {
  return <Rating num={5} setNum={action("clicked")} />;
};
export const InteractiveRating = () => {
  const [rating, setRating] = useState<RatingValue>(0);

  return <Rating num={rating} setNum={setRating} />;
};
