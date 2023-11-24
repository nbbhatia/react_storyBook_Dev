import React from "react";
import TypographyComponent from "./typography";

export default {
  title: "Component/Typography",
  component: TypographyComponent,
};
const Template = (args) => <TypographyComponent {...args} />;

export const Headline=Template.bind({});
Headline.args={
    varianttype:"h1",
    children:"Heading"
}

export const Body=Template.bind({});
Body.args={
    varianttype:"body1",
    children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum"
}

export const Eyebrow= Template.bind({});

Eyebrow.args={
  varianttype:"h5",
  children:"Eyebrow text"
}