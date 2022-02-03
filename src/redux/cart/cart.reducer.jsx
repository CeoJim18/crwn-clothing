import CardActionTypes from "./cart.types";

const {TOGGLE_CART_HIDDEN}=CardActionTypes;

const INITIAL_STATE ={
  hidden: true
};

const cartReducer =(state=INITIAL_STATE, action)=>{
  switch(action.type){
    case TOGGLE_CART_HIDDEN:
      return{
        ...state,//returned alle andere props van previous state
        hidden:!state.hidden//maar verandert wel alleen de waarde van hidden
      }
      default:
        return state;
  }
};

export default cartReducer;

