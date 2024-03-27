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
import {Container} from '../../../atom';
import PageHeader from '../../common/header/pageHeader';
import {DATA_TYPE} from '../constants';

// DATA TYPE COMPONENT
import FormDataType from './formDataType';
import APIDataType from './apiDataType';

// DATA IMPORT
import allProducts from '../data/allProduct.json';

const ProductDetailsPage = () => {

  // PARAMS
  const { productId } = useParams();
  const productDetails = allProducts.find(item => item.id === productId);
  const productData = productDetails.data;
  
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);

  const getDataTypeComponentByType = (data) => {
    switch (data.type) {
      case DATA_TYPE.DATA: 
        return <FormDataType data={data}/>
      case DATA_TYPE.API: 
        return <APIDataType data={data} setLoading={setLoading}/>;
    }
  }
  
  return (
    <> 
      <PageHeader title={productDetails.title} subtitle={productDetails.info} {...{isLoading}}></PageHeader>
      <Container>
        {productData.map((item, index) => (
        <Box key={index}>
          {item.type && getDataTypeComponentByType(item)}
        </Box>
        ))}
      </Container>
    </>
  )
}

export default ProductDetailsPage;