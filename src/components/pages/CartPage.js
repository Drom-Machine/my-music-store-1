import HomeIcon from '@mui/icons-material/Home';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart_Action } from '../../reduxStore';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';




const CartPage = (props) => {
  const shoppingCart = useSelector(state => state.shoppingCart);

  const total = shoppingCart.reduce((acc, cartItem) => {
    return acc + (cartItem.price * cartItem.quantity);
  }, 0);

  const dispatch = useDispatch();

  const emptyShoppingCart = () => {
    dispatch({type: emptyCart_Action})
  }

  return (
    <Layout>
      <Box p={4}>
        {shoppingCart.map(item => (
          <Box mb={4} key={item.id}>
            <CartItem
              cartItem={{
                id: item.id,
                title: item.title,
                image: item.image,
                quantity: item.quantity,
                price: item.price,
              }}
            />
          </Box>
        ))}
        <Box display="flex" justifyContent="center" mb={2}>
          <Typography>Total: ${ total / 100}</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} variant="contained">Checkout</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Button sx={{width: '220px'}} startIcon={<ReplayIcon />} variant="contained" onClick={emptyShoppingCart}>Empty cart</Button>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Link to="/">
            <Button sx={{width: '220px'}}  startIcon={<HomeIcon />} variant="contained">Back to home page</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
};

export default CartPage;
