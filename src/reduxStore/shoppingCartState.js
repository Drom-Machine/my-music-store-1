// const shoppingCartInitialState = [];

// const ADD_ITEM_TO_CART_ACTION = 'mymusicstore.com/addItemToCart';

// const REMOVE_ITEM_FROM_CART_ACTION = 'mymusicstore.com/removeItemFromCart';

// const EMPTY_CART_ACTION = 'mymusicstore.com/emptyCart';

// export const shoppingCartReducer = (state = shoppingCartInitialState, action) => {

//   if(action.type === ADD_ITEM_TO_CART_ACTION){
//     // write some logic to add item to cart

//     // Check if the item is already in the cart
//     const itemFoundInCart = state.find(cartItem => cartItem.id === action.cartItem.id);

//     // if its not, we can add it at the end with a quantity of 1
//     if(!itemFoundInCart){
//       return [...state, {...action.cartItem, quantity: 1}];
//     }

//     // if it is actually already in the cart    
//     // we will still remove it
//     const cartWithFoundItemRemoved = state.filter(item => item.id !== action.cartItem.id);
//     // but add it again with the correct updated quantity.
//     return [...cartWithFoundItemRemoved, {...action.cartItem, quantity: itemFoundInCart.quantity + 1 }]
    
//   }

//   if(action.type === REMOVE_ITEM_FROM_CART_ACTION){
//     // write some logic to remove item fromn cart

//     return state.filter(item => item.id !== action.itemId)
//   }


//   if(action.type === EMPTY_CART_ACTION){
//     // write some logic to empty the shopping cart
//     return shoppingCartInitialState;
//   }

//   return state;
// };

// export const addToCartActionCreator = (product) => {

//   return {
//     type: ADD_ITEM_TO_CART_ACTION,
//     cartItem: {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       image: product.image
//     }
//   }
// };

// export const emptyCartActionCreator = () => ({type: EMPTY_CART_ACTION})

// export const removeFromCartActionCreator = (id) => {
//   return {
//     type: REMOVE_ITEM_FROM_CART_ACTION,
//     itemId: id,
//   }
// }
