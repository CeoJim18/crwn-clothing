import CardActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
const {TOGGLE_CART_HIDDEN,ADD_ITEM}=CardActionTypes;

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
      default:
        return state;
  }
};

export default cartReducer;

