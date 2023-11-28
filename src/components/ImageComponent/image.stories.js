import ImageComponent from "./Image";
import CarImage from "../../components/assets/images/supercar-wallpapers-bugatti-4.jpg";
import logoImage from "../../components/assets/images/logo.png";

export default {
  title: "Component/Image",
  Component: ImageComponent,
};

export const BannerImage = () => (
  <ImageComponent title="banner_image" img={CarImage} />
);
export const LogoImage = () => (
  <ImageComponent title="Logo_image" img={logoImage} />
);
