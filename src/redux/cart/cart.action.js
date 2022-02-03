import CardActionTypes from "./cart.types";

const {TOGGLE_CART_HIDDEN}=CardActionTypes;

export const toggleCartHidden=()=>({//je wilt niets passen als props maar gew triggeren
  type:TOGGLE_CART_HIDDEN

});

//als je een functie maakt die een object moet returnen, zet je () tussen {} (return literals eerst en daarin object ones)
