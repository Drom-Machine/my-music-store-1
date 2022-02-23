import { createContext, useContext, useReducer } from "react";


export const shoppingCartContext = createContext();

//Custom hook to access the shoppingCartContext:
export const useShoppingCart = () => useContext(shoppingCartContext);

const shoppingCartInitialState = [];

const addItemToCart_Action = 'addItemToCart';

const removeItemFromCart_Action = 'removeItemFromCart';

const emptyCart_Action = 'emptyCart';

const shoppingCartReducer = (state, action) => {

  if(action.type === addItemToCart_Action){
    // write some logic to add item to cart

    // Check if the item is already in the cart
    const itemFoundInCart = state.find(cartItem => cartItem.id === action.cartItem.id);

    // if its not, we can add it at the end with a quantity of 1
    if(!itemFoundInCart){
      return [...state, {...action.cartItem, quantity: 1}];
    }

    // if it is actually already in the cart    
    // we will still remove it
    const cartWithFoundItemRemoved = state.filter(item => item.id !== action.cartItem.id);
    // but add it again with the correct updated quantity.
    return [...cartWithFoundItemRemoved, {...action.cartItem, quantity: itemFoundInCart.quantity + 1 }]
    
  }

  if(action.type === removeItemFromCart_Action){
    // write some logic to remove item from cart

    return state.filter(item => item.id !== action.itemId)
  }


  if(action.type === emptyCart_Action){
    // write some logic to empty the shopping cart
    return shoppingCartInitialState;
  }
};

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState);

  const removeItem = (id) => {
    dispatch({
      type: removeItemFromCart_Action,
      itemId: id,
    })
  };

  // Takes a product, and adds it to the shopping cart.
  const addItemToCart = (product) => {
    
    dispatch({
      type: addItemToCart_Action,
      cartItem: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      }
    })
  };

  const emptyShoppingCart = () => {
    dispatch({type: emptyCart_Action})
  }

  const total = shoppingCart.reduce((acc, cartItem) => {
    return acc + (cartItem.price * cartItem.quantity);
  }, 0);

  console.log('total: ', total);
  
  return (
    <shoppingCartContext.Provider value={{ shoppingCart, removeItem, addItemToCart, emptyShoppingCart, total }}>
      {children}
    </shoppingCartContext.Provider>
  )
}