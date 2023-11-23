import React from "react";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Component/Link",
};


export const First = () => (
  <button onClick={linkTo("Component/Link", "second")}>Go to "Second"</button>
);
export const Second = () => <button onClick={linkTo("Component/Link","First")}>Go to "First"</button>;
