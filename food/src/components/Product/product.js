import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { Link ,useParams} from "react-router-dom";
import products from '../../utils/products.json';

const ProductDetails = () => {
  
}


const Product = ({ product }) => {
  {/*
  const {productId} = useParams()
  const thisProduct = products.find(prod => prod.id === productId)
  
  return (
      <div>
          <h1>{thisProduct.name}</h1>
          <p>Price: ${thisProduct.price}</p>
          <p>{thisProduct.description}</p>
      </div>
  )*/}

    return (
    <Card >
      <CardMedia title={"Hi"} image={product.image}/>
      <CardContent>
        <div >
          <Link to={`/products/${product.id}`}>

          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          </Link>

          <Typography gutterBottom variant="h5" component="h2">
            {product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="Checkout">
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;