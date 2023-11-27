import React from "react";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Component/Link",
};


export const First = () => (
  <h3 onClick={linkTo("Component/Link", "Second")} style={{cursor:"pointer",textDecoration:"underline",color:"blue"}}>Go to "Second"</h3>
);
export const Second = () => <h3 onClick={linkTo("Component/Link","First")} style={{cursor:"pointer",textDecoration:"underline",color:"blue"}}>Go to "First"</h3>;
