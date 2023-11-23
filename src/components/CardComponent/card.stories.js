import React from "react";

import CustomCard from "./card";

export default {
  title: "Component/Card",
  component: CustomCard,
};
const Template = (args) => <CustomCard {...args} />;
export const CardComponent = Template.bind({});
CardComponent.args = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
  thumbnail:
    "<PATH to Your IMAGE>",
  tag: "nature",
  targetlabel: "Learn More",
  altText: "Nature",
};