import React from 'react'
import Grid from '@material-ui/core/Grid';
import Product from './Product/product';
import products from '../utils/products.json';

function Products() {

    return (
        <div>
            <h1 >Foodzie</h1>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Products