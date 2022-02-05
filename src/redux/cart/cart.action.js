import CardActionTypes from "./cart.types";

const {TOGGLE_CART_HIDDEN, ADD_ITEM,CLEAR_ITEM_FROM_CART,REMOVE_ITEM}=CardActionTypes;

export const toggleCartHidden=()=>({//je wilt niets passen als props maar gew triggeren
  type:TOGGLE_CART_HIDDEN

});

export const addItem= item=>({
  type:ADD_ITEM,
  payload: item

});

export const clearItemFromCart=item=>({
  type: CLEAR_ITEM_FROM_CART,
  payload:item
});

export const removeItem=(item)=>({
  type: REMOVE_ITEM,
  payload:item

});

//als je een functie maakt die een object moet returnen, zet je () tussen {} (return literals eerst en daarin object ones)
