import {createSelector} from 'reselect';

const selectUser=state=> state.user;


export const selectCurrentUser=createSelector(
  [selectUser],//je kan functies hier passen in een array of gewoon als props in dezelfde volgorde als hun outputs in de 2e arguments
  user=> user.currentUser
)
