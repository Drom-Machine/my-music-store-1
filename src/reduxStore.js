import { configureStore } from '@reduxjs/toolkit'

const shoppingCartInitialState = [];


export const addItemToCart_ACTION = 'addItemToCart';

export const removeItemFromCart_ACTION = 'removeItemFromCart';

export const emptyCart_ACTION = 'emptyCart';

export const signIn_ACTION = 'signIn';





const shoppingCartReducer = (state = shoppingCartInitialState, action) => {

    if(action.type === addItemToCart_ACTION){
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

    if(action.type === removeItemFromCart_ACTION){
         // write some logic to remove item fromn cart

        return state.filter(item => item.id !== action.itemId)
    }


    if(action.type === emptyCart_ACTION){
         // write some logic to empty the shopping cart
        return shoppingCartInitialState;
    }

    return state;
};


const ACTIONS = {
    logIn: "signIn",
    userState: {user: undefined},
}





//--------------------------------------------------------------user log in export
export const userLogIn = (user) =>({
    type: ACTIONS.logIn,
    payload: {user: user},
})


//--------------------------------------------------------------user reducer export
const userReducer = (state , action) =>{
    switch (action.type) {
        case ACTIONS.logIn:
            const {payload} = action.payload;
            return {...state, user: payload.user}
        default:
            return state;
    }
}


//--------------------------------------------------------------add to cart (actionCreator) export
export const addItemToCart_Action = (product) => {

    return {
        type: addItemToCart_ACTION,
        cartItem: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
        }
    }
};

//--------------------------------------------------------------empty cart (actionCreator) export
export const emptyCart_Action = () => ({type: emptyCart_ACTION})



//--------------------------------------------------------------remove cart (actionCreator) export
export const removeItemFromCart_Action = (id) => {
    return {
        type: removeItemFromCart_ACTION,
        itemId: id,
    }
}



//--------------------------------------------------------------config store
const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
        user: userReducer,
        userState: ACTIONS.userState,
    },
})

export default store;