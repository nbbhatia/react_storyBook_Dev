import * as React from "react"; 
import { PrimarySubscription } from "../LoginForm/loginForm.stories";
import {BannerImage} from "../ImageComponent/image.stories";
import CardComponent from "../CardComponent/card";
import { HeaderComponent } from "../Header/header.stories";
import { Headline, Body } from "../TypographyComponent/typography.stories";
import { Grid } from "@mui/material";
import { FooterComponent } from "../Footer/footer.stories";
import DummyImage from "../assets/images/dummyImage.jpg";
import DummyImage1 from "../assets/images/images.jpg";
import DummyImage2 from "../assets/images/pexels-photo-3729464.jpeg";
import "./index.css";

function index() {
  let CardArray = [
    {
      image: 'https://i.pinimg.com/1200x/26/56/3a/26563ad993d37bccb52da05220eb63b3.jpg',
      title: "Card_1",
      eyebrowText: "EyebrowText_1",
      btnText: "View Details",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBzPm6GmE0XVAovFF8bfmGU8D83c6vvuxm2Lpf6bR5U3FMtvkb3_0UNyPg6vjyrlc6xk&usqp=CAU',
      title: "Card_2",
      eyebrowText: "EyebrowText_2",
      btnText: "View Details",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
    },
    {
      image: 'https://image.winudf.com/v2/image1/Y29tLmFwcHRyb25pay5idWdhdHRpd2FsbHBhcGVyX3NjcmVlbl8xXzE1NTMzMjAyMDVfMDQ4/screen-1.webp?fakeurl=1&type=.webp',
      title: "Card_3",
      eyebrowText: "EyebrowText3",
      btnText: "View Details",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
    },
  ];
  return (
    <div>
      <HeaderComponent backgroundColor="transparent" />
      <BannerImage/>
      <div  style={{ padding: "50px 30px" }} >
        <Headline varianttype="h3">Find your Model</Headline>
        <div className="Card_component">
          {CardArray.map((cards, index) => (
            <div key={index}>
              <CardComponent
                image={cards.image}
                title={cards.title}
                eyebrowText={cards.eyebrowText}
                summary={cards.summary}
                btnText={cards.btnText}
              />
            </div>
          ))}
        </div>
        <Grid className="content">
          <Grid md={6} item style={{ paddingRight: 48 }}>
            <Headline varianttype="h3">Car Website Content</Headline>
            <Body varianttype="body2">
              In the fast-paced world of online marketing, visibility is a key
              component of making your website work. One of the easiest ways to
              be seen is through search engine results. While there are paid
              advertising options available, you can get a jump-start on your
              competition by adding organic results as well. Car Website Content
              with Content Motive capitalizes on organic search results by using
              topics that fit in line with your existing strategies while also
              helping to better populate a web search for your products and
              services. Having unique content helps your website in multiple
              ways. First, with engaging content that’s actually relevant to
              your business and specialized for you, your customers learn to
              turn to your website as an authority. Additionally, having website
              content helping your dealer site rank in search engines
              organically as opposed to just through paid advertising helps you
              better dominate results (especially when not all competitors
              utilize SEO content). So you gain a foothold in relevant searches
              and unique content helps increase your overall web authority, both
              in terms of your site’s Google ranking and with your customers.
            </Body>
          </Grid>
          <Grid md={6} item data-testid="login-form">
            <PrimarySubscription />
          </Grid>
        </Grid>
      </div>
      <FooterComponent
        logo="Car Company Name"
        summary={`It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English.`}
      />
    </div>
  );
}

export default index;
