import React from "react";
import CustomCard from "./card";
import DummyImage2 from "../assets/images/pexels-photo-3729464.jpeg";
export default {
  title: "Component/Card",
  component: CustomCard,
};
// const Template = (args) => <CustomCard {...args} />;

export const CardComponent = () => (
  <CustomCard
    title="Headline"
    eyebrowText="dumy"
    image={DummyImage2}
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum"
    // img={logoImage}
  />
);

// export const CardComponent = Template.bind({});
// CardComponent.args = {
//   title: "Headline",
//   eyebrowText: "dumy",
//   summary:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",

 
//   image:
//     "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
// };
