
import ImageComponent from "./Image";
import CarImage from "../../components/assets/images/dummyImage.jpg";
import logoImage from "../../components/assets/images/sports-car-logo-3.png";

export default {
  title: "Component/Image",
  Component: ImageComponent,
};

const template = (args) => <ImageComponent {...args} />;

export const Banner_image = template.bind({});
export const LogoImage =template.bind({});


Banner_image.args = {
  title: "banner_image",
  img: CarImage
}

LogoImage.args = {
  title: "Logo_image",
  img: logoImage
};

