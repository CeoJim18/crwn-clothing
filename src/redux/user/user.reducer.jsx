//functie die 2 props krijgt ( state object or initial state (action)))
 /*{
  type:
  payload: 
}
*/

import { UserActionTypes } from "./user.types"; 
const INITIAL_STATE={
  currentUser:null
}

const userReducer =(state = INITIAL_STATE, action)=>{ // die isteken naast state is om een default state te zetten ervoor. In es6 kan je dat doen in je parameters.
 switch(action.type){
   case UserActionTypes.SET_CURRENT_USER:
     return{
       ...state, 
       currentUser:action.payload
     }
//uitleg: die action kan je zien als een trigger. Enigste wat het doet is de juiste waarde van die type passen (die waarde dat die case welke nodig is activeert.) het triggered alleen. Op basis hiervan returned UserReducer een bepaalde object(state). Deze state word in root reducer opgenomen. Die action is de enigste weg waarbij de components verandering kunnen plegen op states. Je kan ook los van types andere props waardes passen in je action (zie deze vb waarbij er een payload is gezet. De naam payload zet je meestal als je in je actions een hele object/state wilt passen. Zo kunnen components hele states passen en veranderen)
   default:
     return state;


 }
};

export default userReducer;
