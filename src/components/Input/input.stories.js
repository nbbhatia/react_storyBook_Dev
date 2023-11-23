import React from "react";
import Input from "./input";
import Center from "../Center/center"

export default {
  title: "Component/Input",
  component: Input,
  decorators:[story=><Center>{story(  )}</Center>]
};

export const Small = () => <Input size="small" placeholder="Small size" />;
export const Medium = () => <Input size="medium" placeholder="Medium size" />;
export const Large = () => <Input size="large" placeholder="Large size" />;

// in v6 we have facility to rename the name of stories

Small.storyName="Small input field"