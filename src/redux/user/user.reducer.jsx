//functie die 2 props krijgt ( state object or initial state (action)))
 /*{
  type:
  payload: 
}
*/
const INITIAL_STATE={
  currentUser:null
}

const userReducer =(state = INITIAL_STATE, action)=>{ // die isteken naast state is om een default state te zetten ervoor. In es6 kan je dat doen in je parameters.
 switch(action.type){
   case 'SET_CURRENT_USER':
     return{
       ...state, 
       currentUser:action.payload
     }


   default:
     return state;


 }
};

export default userReducer;
