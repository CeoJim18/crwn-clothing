import CardActionTypes from "./cart.types";

const {TOGGLE_CART_HIDDEN, ADD_ITEM}=CardActionTypes;

export const toggleCartHidden=()=>({//je wilt niets passen als props maar gew triggeren
  type:TOGGLE_CART_HIDDEN

});

export const addItem= item=>({
  type:ADD_ITEM,
  payload: item

})

//als je een functie maakt die een object moet returnen, zet je () tussen {} (return literals eerst en daarin object ones)
