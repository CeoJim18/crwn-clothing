//uitils hebben betrekkinh op slectors

export const addItemToCart= (cartItems,cartItemToAdd)=>{
  const existingCartItem= cartItems.find(cartItems=> cartItems.id===cartItemToAdd.id);

  if(existingCartItem){
    return cartItems.map(cartItem => cartItem.id=== cartItemToAdd.id ? {...cartItem,quantity: cartItem.quantity + 1}: cartItem)
  }
 //van elke item/id heb je 1 instantie in je array. het is een object, de property quantity komt erin bijkijken.
  return[...cartItems,{...cartItemToAdd,quantity:1}];
};

export const removeItemFromCart=(cartItems, cartItemToRemove)=>{
  const existingCartItem= cartItems.find(cartItem=> cartItem.id===cartItemToRemove.id);//returned eerste instantie van een item uit een list

  if(existingCartItem.quantity===1){
    return cartItems.filter(cartItem=> cartItem.id!==cartItemToRemove.id)
  }

  return cartItems.map(cartItem=> cartItem.id===cartItemToRemove.id?{...cartItem, quantity: cartItem.quantity -1}: cartItem);

}
