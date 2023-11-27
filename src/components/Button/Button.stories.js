import React from "react";
import Button from "./Button";
import Center from "../Center/center";
export default {
  title: "Component/Button",
  // component: Button,
  args: {
    children: "AllButton",
  },
  decorators: [(story) => <Center>{story()}</Center>],
};


export const ViewDetails = () => (
  <Center>
    <Button typeOfVariant="contained" variant="primary">View Details</Button>
  </Center>
);

export const Secondary = () => <Button typeOfVariant="text" variant="secondary"> Secondary</Button>;

