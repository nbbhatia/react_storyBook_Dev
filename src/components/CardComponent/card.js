// import React from "react";
// import { makeStyles } from "@mui/styles";
// import {
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Button,
//   Typography,
// } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function CustomCard({
//   title,
//   altText,
//   summary,
//   thumbnail,
//   tag,
//   targetlabel,
// }) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia className={classes.media} image={thumbnail} alt={altText} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {summary}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           {tag}
//         </Button>
//         <Button size="small" color="primary">
//           {targetlabel}
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { linkTo } from "@storybook/addon-links";
import "./card.css";

export default function MediaCard(props) {
  const { image, title, summary } = props;
  let arr = [1];
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {arr.map((item,index) => (
        
        <Card sx={{ maxWidth: 500 }} style={{margin:24}}>
          <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={linkTo("Component/Image")} className="card_button">View Image</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
