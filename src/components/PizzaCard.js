import React from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from "@material-ui/core";

const PizzaCard = (props) => {
  const pos = () => {
    props.addToCart(props.name);
    alert("click1")
   };
  const pos1 = () => {
    alert("click2")
  props.addToCart(props.price);
     
   };
   const pos2 = () => {
    alert("click3")
     props.addToCart(props.description);
   };
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={props.image} alt={props.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            ${props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success " onClick={()=>{pos;pos1;pos2}}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default PizzaCard;
