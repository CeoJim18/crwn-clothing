//MEMOIZATION
//slectores improven performance. omdat het je alleen dat deel van root wat je nodig hebt laten selecteren. Je kan zo renderen wat je nodig hebt en daardoor performance saven
import {createSelector} from 'reselect';

const selectCart=state=> state.cart;//select function om state te slicen in de components which u need.

export const selectCartItems=createSelector(
  [selectCart],
  (cart)=> cart.cartItems
);
//createSelector functie neemt wwardes, nl een collectin (array) en een functie. In de array zet je je select functie en in je functie zet je de output van die selection function en manipuleer je hem hoe je wilt.
//de array verwijst naar die specifieke functie welke een output leveert die we nodig hebben voor verdere manip
export const selectCartItemsCount=createSelector(
  [selectCartItems],
  cartItems.reduce((accumalatedQuantity, cartItem)=> accumalatedQuantity + cartItem.quantity,0)
  
  )