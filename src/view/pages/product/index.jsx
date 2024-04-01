/**
 * 
 * Product Page component
 * @author - NA 
 * @date - 1st March, 2024
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';

// COMPONENT IMPORT
import {Container, Link} from '../../atom';
import PageHeader from '../common/header/pageHeader';

// UTILS IMPORT
import {truncateString} from '../../../utils';

// DATA IMPORT
import allProducts from './data/allProduct.json';

// STYLE IMPORT
import useStyles from './styles';

const ProductPage = () => {
  // DECLARE STYLE
  const classes = useStyles();

  // NAVBAR
  const navigate = useNavigate();
  
  // STATE VARIABLE
  const [isLoading, setLoading] = useState(false);
  
  // ON MENU ITEM CLICKED
  const navigateToProductDetails = (product) => {
    if (product.isStandalonePage) {
      navigate(product.pathName);
    } else {
      navigate(`/productDetails/${product.id}`);
    }
  };

  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  })
  
  return (
    <> 
      <PageHeader title='Product listing' subtitle="Explore our products and find what you need on our product listing page." {...{isLoading}}></PageHeader>
      <Container>
      {allProducts.map(item => (
        <Box key={item.id} className={clsx(classes.card, item.disabled && classes.cardDisabled)} onClick={() => !item.disabled && navigateToProductDetails(item)}>
          {item.disabled && <Box className={classes.overlay}></Box>}
          <Box className={classes.cardTitleContainer}>
            <img src={require(`../../../assets/img/${item.imgName}`)} className={classes.cardLogo}/>
            <Box>
              <Box className={classes.cardTitle}>{item.title}</Box>
              <Box className={classes.cardInfo}>{truncateString(item.info, 100)}</Box>
            </Box>
          </Box>
          <Box className={classes.cardFooter}><Link label='View details'/></Box>
        </Box>
      ))}
      </Container>
    </>
  )
}

export default ProductPage;