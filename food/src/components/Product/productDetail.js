import React from 'react';
import { Link ,useParams} from "react-router-dom";
import products from '../../utils/products.json';

const ProductDetails = () => {
  const {productId} = useParams()
  const thisProduct = products.find(prod => prod.id === productId)
  
  return (
      <div>
          <h1>{thisProduct.name}</h1>
          <p>Price: ${thisProduct.price}</p>
          <p>{thisProduct.info}</p>
      </div>
  )
  }

export default ProductDetails