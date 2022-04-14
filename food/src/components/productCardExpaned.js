import React from 'react';
import { Box, Grid } from '@material-ui/core';

export const ProductCardExpanded = React.forwardRef(({ product }, ref) => {


  return (
    <Box ref={ref} style={{backgroundColor:'black',color:'white',boxShadow:'5px 5px 5px 5px rgba(0,0,0,0.5)',height:'800px',width:'1200px',padding:'5px'}}>
      <Grid container spacing={8}>
          <Grid item xs={6}>
            <img src={product.small} alt={product.name} style={{maxHeight:'65%'}} />
          </Grid>
          <Grid item xs={6} style={{boxSizing:'border-box'}}>
            
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <h4>Rs {product.price}</h4>
            
          </Grid>
      </Grid>
    </Box>
  );
});
