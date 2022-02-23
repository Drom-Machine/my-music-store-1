// const shoppingCartInitialState = [];

// //change the const - S
// // const ADD_ITEM_TO_CART_ACTION = 'mymusicstore.com/addItemToCart';
// const addItemToCart_ACTION = 'mymusicstore.com/addItemToCart';

// // const REMOVE_ITEM_FROM_CART_ACTION = 'mymusicstore.com/removeItemFromCart';
// const removeItemFromCart_ACTION = 'mymusicstore.com/removeItemFromCart';

// // const EMPTY_CART_ACTION = 'mymusicstore.com/emptyCart';
// const emptyCart_ACTION = 'mymusicstore.com/emptyCart';





// export const shoppingCartReducer = (state = shoppingCartInitialState, action) => {

//     if(action.type === addItemToCart_ACTION){


//         const itemFoundInCart = state.find(cartItem => cartItem.id === action.cartItem.id);


//         if(!itemFoundInCart){
//         return [...state, {...action.cartItem, quantity: 1}];
//     }

//     const cartWithFoundItemRemoved = state.filter(item => item.id !== action.cartItem.id);
    
//     return [...cartWithFoundItemRemoved, {...action.cartItem, quantity: itemFoundInCart.quantity + 1 }]
    
//     }

//     if(action.type === removeItemFromCart_ACTION){


//         return state.filter(item => item.id !== action.itemId)
//     }


//     if(action.type === emptyCart_ACTION){
        
//         return shoppingCartInitialState;
//     }

//     return state;
// };

// export const addToCart_ActionCreator = (product) => {

//     return {
//         type: addItemToCart_ACTION,
//         cartItem: {
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image
//         }
//     }
// };

// export const emptyCart_ActionCreator = () => ({type: emptyCart_ACTION})

// export const removeFromCart_ActionCreator = (id) => {
//     return {
//         type: removeItemFromCart_ACTION,
//         itemId: id,
//     }
// }
