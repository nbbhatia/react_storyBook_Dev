import React from "react";
import { linkTo } from "@storybook/addon-links";
import CustomCard from "./card";

export default {
  title: "Component/Card",
  component: CustomCard,
};
const Template = (args) => <CustomCard {...args} />;
export const CardComponent = Template.bind({});

CardComponent.args = {
  title: "Headline",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
  thumbnail: "<PATH to Your IMAGE>",
  tag: "nature",
  targetlabel: "Learn More",
  altText: "Nature",
  image:
    "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
};

// CardComponent.args = {
//     title: "Card_Headline2",
//     summary:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
//     thumbnail: "<PATH to Your IMAGE>",
//     tag: "nature",
//     targetlabel: "Learn More",
//     altText: "Nature",
//     image:
//       "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
//   };
  
  