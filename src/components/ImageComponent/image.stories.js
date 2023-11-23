
import ImageComponent from "./Image";

export default {
  title: "Component/Image",
  Component: ImageComponent,
};

const template = (args) => <ImageComponent {...args} />;

export const PrimaryImage = template.bind({});

PrimaryImage.args = {
  title: "Mountain",
  img: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
};
