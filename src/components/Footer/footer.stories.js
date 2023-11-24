import React from "react";
import Footer from "./footer";

export default {
  title: "Component/Footer",
  component: Footer,
};

const template = (args) => <Footer {...args} />;

export const FooterComponent = template.bind({});

FooterComponent.args={
  logo:"Company Name",
  summary:`It is a long established fact that a reader will be distracted by the
  readable content of a page when looking at its layout. The point of
  using Lorem Ipsum is that it has a more-or-less normal distribution of
  letters, as opposed to using 'Content here, content here', making it
  look like readable English.`
}

