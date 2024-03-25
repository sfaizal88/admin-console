/**
 * 
 * Product Details Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import { useParams } from 'react-router-dom';

// COMPONENT IMPORT
import {Container, FromField} from '../../../atom';
import PageHeader from '../../common/header/pageHeader';

// DATA IMPORT
import allProducts from '../data/allProduct.json';

const ProductDetailsPage = () => {

  // PARAMS
  const { productId } = useParams();
  const productDetails = allProducts.find(item => item.id === productId);
  const productData = productDetails.data;
  
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  
  return (
    <> 
      <PageHeader title={productDetails.title} subtitle={productDetails.info} {...{isLoading}}></PageHeader>
      <Container>
        {productData.map((item, index) => (
        <Box key={index}>
          <FromField label={item.label} value={item.value} canCopy mask/>
        </Box>
        ))}
      </Container>
    </>
  )
}

export default ProductDetailsPage;