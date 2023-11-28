import React from "react";
import CustomCard from "./card";
import DummyImage2 from "../assets/images/supercar-wallpapers-bugatti-4.jpg";
export default {
  title: "Component/Card",
  component: CustomCard,
};
export const CardComponent = () => (
  <CustomCard
    title="Headline"
    eyebrowText="dumy"
    btnText="View Image"
    image={DummyImage2}
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum"
  />
);
