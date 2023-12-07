import ImageComponent from "./Image";


export default {
  title: "Component/Image",
  Component: ImageComponent,
};

export const BannerImage = () => 
  <ImageComponent title="banner_image">
    <img  src={`https://www.mobilesmspk.net/user/images/wallpaper_images/2020/04/16/www.mobilesmspk.net_car_4690.jpg`} alt="banner_image" style={{height:"100vh",width:"100%",objectFit:"cover"}}/>
  </ImageComponent>


export const LogoImage = () => 
  <ImageComponent title="LogoImage">
    <img src={'https://media.istockphoto.com/id/1315666975/vector/sport-car-icon-and-symbol.jpg?s=612x612&w=0&k=20&c=rLvzmkOgrgTyWKzpJNuq83icILWoQkVxbi_p7I1N6TQ='} alt="Logo_image" style={{height:"100px",width:"200px",objectFit:"cover"}}/>
  </ImageComponent>

