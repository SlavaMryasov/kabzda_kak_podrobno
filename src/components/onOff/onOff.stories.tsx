import { action } from "@storybook/addon-actions";
import { OnOff } from "./onOff";
import { useState } from "react";

export default {
  title: "Onoff",
  component: OnOff,
};

const handleClick = () => action("clicked");

export const OnMode = () => {
  return <OnOff on onChange={handleClick} />;
};

export const OffMode = () => {
  return <OnOff on={false} onChange={handleClick} />;
};

export const InteractiveOnOff = () => {
  const [on, setOn] = useState(false);

  return <OnOff on={on} onChange={setOn} />;
};
