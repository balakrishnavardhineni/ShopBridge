import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import "../styles/Components/basicCard.css";
import { connect } from "react-redux";
import {
  handleDeleteProduct,
  handleUpdateProduct
} from "../Redux/Actions/productActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  media: {
    height: 140
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function BasicCard(props) {
  const classes = useStyles();
  let { productData = {}, cardClassName = "" } = props;
  let {
    name = "",
    price = "",
    image_link = "",
    description = "",
    id = ""
  } = productData;

  const handleUpdate = () =>
    props.push({
      pathname: "/add/product",
      state: { name, description, price, id }
    });

  return (
    <Card className={(classes.root, cardClassName)} variant="outlined">
      <CardMedia
        className={classes.media}
        image={image_link}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`$ ${price}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUpdate()}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.handleDeleteProduct(id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, { handleDeleteProduct })(BasicCard);
