import CardActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";
const {TOGGLE_CART_HIDDEN,ADD_ITEM,CLEAR_ITEM_FROM_CART,REMOVE_ITEM}=CardActionTypes;

const INITIAL_STATE ={
  hidden: true,
  cartItems:[]//hier gaan cart items of eruit
};

const cartReducer =(state=INITIAL_STATE, action)=>{
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return{
        ...state,//returned alle andere props van previous state
        hidden:!state.hidden//maar verandert wel alleen de waarde van hidden
      };
      case ADD_ITEM:
        return{
          ...state,
          cartItems: addItemToCart(state.cartItems,action.payload)//zo pass je dus een 2e waarde in
        };

        case REMOVE_ITEM:
          return{
            ...state,
            cartItems: removeItemFromCart(state.cartItems,action.payload)
          };
      case CLEAR_ITEM_FROM_CART:
        return{
          ...state,
          cartItems: state.cartItems.filter(cartItem=> cartItem.id!==action.payload.id)//om items weg te halen als hun id matchen
        };
      default:
        return state;
  }
};

export default cartReducer;

