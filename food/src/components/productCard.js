import React, { useState } from 'react';
import {Card,CardMedia, CardActions,IconButton} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const  ProductCard = ({ product, handleOpenModal }) => {
  
  return (
    <Card className="card" style={{backgroundColor: 'black',color:'white',boxShadow:'10px 10px 15px 15px rgba(0,0,0,0.3)'}} onClick={() => handleOpenModal(product.id)}>
      <CardMedia component="img" image={product.small}/>
      <div>
        <h2>{product.name}</h2>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};


