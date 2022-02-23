import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemgitFromCart_Action } from '../reduxStore';

const CartItem = (props) => {

  const dispatch = useDispatch();

    const removeItem = (id) => {
    dispatch({
      type: removeItemFromCart_Action,
      itemId: id,
    })
  }

  const {
    cartItem: {
    id,
    title,
    image,
    quantity,
    price,
  }} = props;

  const reduxState = useSelector(state => state)

  console.log('reduxState: ', reduxState);

  return (
      <Card sx={{ display: 'flex' }}>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <CardMedia
            component="img"
            sx={{ height: 80, maxWidth: 80, p: 2 }}
            image={image}
            alt="Live from space album cover"
          />
        </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" flexGrow={1}>
        <Box mb={1}>
          <Typography fontWeight="bold">{title}</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold">${price / 100}</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box mb={1} px={2}>
          <Typography fontWeight="bold">x {quantity}</Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box mb={1} px={2}>
          <IconButton onClick={() => removeItem(id)}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
