import React from "react";
import { PrimarySubscription } from "../LoginForm/loginForm.stories";
import DummyImage from "../assets/images/dummyImage.jpg";
import CardComponent from "../CardComponent/card";
import { HeaderComponent } from "../Header/header.stories";
import { Headline, Body } from "../TypographyComponent/typography.stories";
import { Grid } from "@mui/material";
import { FooterComponent } from "../Footer/footer.stories";
import "./index.css";

function index() {
    let CardArray = [
        {
            image: DummyImage,
            title: "hello",
            eyebrowText: "dummy EyebrowText",
            btnText: "View Details",
            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
        },
        {
            image: DummyImage,
            title: "hello world",
            eyebrowText: "EyebrowText",
            btnText: "View Details",
            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
        },
        {
            image: DummyImage,
            title: "hello world",
            eyebrowText: "EyebrowText",
            btnText: "View Details",
            summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies, tortor quis rhoncus mattis, nisi enim placerat leo, nec porta lectus nibh in erat. Sed mauris ipsum",
        },
    ];
    return (
        <div>
            <HeaderComponent />
            <img src={DummyImage} alt="car_dummy_image" className="dummy_image" />
            <div style={{ padding: 32 }}>
                <div style={{ display: "flex" }}>
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
                <Grid
                    md={12}
                    item
                    style={{ margin: "48px 16px", textAlign: "left", display: "flex" }}
                >
                    <Grid md={6} item style={{ paddingRight: 48 }}>
                        <Headline variantType="h3">Car Website Content</Headline>
                        <Body variantType="body2">
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
                    <Grid md={6} item>
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
