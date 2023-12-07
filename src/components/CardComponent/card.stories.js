import React from "react";
import CustomCard from "./card";

export default {
  title: "Component/Card",
  component: CustomCard,
};
export const CardComponent = () => (
  <CustomCard
    title="Headline"
    eyebrowText="dumy"
    btnText="View Image"
    image={`https://www.mobilesmspk.net/user/images/wallpaper_images/2020/04/16/www.mobilesmspk.net_car_4690.jpg`}
    summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum"
  />
);
