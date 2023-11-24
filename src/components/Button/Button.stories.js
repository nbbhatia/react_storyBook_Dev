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


export const Primary = () => (
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);

export const Secondary = () => <Button variant="secondary"> Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger"> danger</Button>;

// args create a template
//ques:- why do we have write stories with args
//ans- The args approach is much more approriate to what we are writing
// this args approach actually reduces the unique code that you write
// we can use args from another stories

const template = (args) => <Button {...args} />;

export const PrimaryA = template.bind({});

PrimaryA.args = {
  variant: "primary",
};

export const LongPrimaryA = template.bind({});
LongPrimaryA.args = {
  variant: "success",
  children: "LongPrimary",
};
