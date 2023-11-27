import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EyebrowComponent from "../TypographyComponent/typography";
import {ViewDetails} from "../Button/Button.stories"
import { linkTo } from "@storybook/addon-links";
import "./card.css";

export default function MediaCard(props) {
  const { image, title, summary, eyebrowText, btnText } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card style={{ margin: 24, width: 400 }}>
        <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
        <CardContent style={{ textAlign: "left" }}>
          <EyebrowComponent varianttype="h6" children={eyebrowText} />
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography varianttype="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
        <CardActions style={{ padding: "24px 16px" }}>
          {/* <Button
            variant="contained"
            onClick={linkTo("Component/Image")}
            className="card_button"
          >
            {btnText}
          </Button> */}
          <ViewDetails/>
        </CardActions>
      </Card>
    </div>
  );
}
