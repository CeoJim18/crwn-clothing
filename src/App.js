import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch, Redirect} from 'react-router-dom';
import './App.css';



//voordeel van switch is dat je niet per ongeluk gewoon meerdere routes zal renderen
class App extends React.Component {

  //je kan in deze scope geen const zetten
  
 unsubscribeFromAuth=null;

 componentDidMount(){
  const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
      if (userAuth){//als je out signed is het null, dan wordt currentUser ook null. Ben je ingesigned dan heeft et andere waardes
        const userRef = await createUserProfileDocument(userAuth);//dit returned een reference naar de datebase
        //createUserProfileDocument stored user in database (met set method)

        userRef.onSnapshot(snapShot =>{ //van die reference naar de database wil jij een snapshot
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            
          });
          
            
        });
        
      }
     
        setCurrentUser(userAuth);//waar de functie gebruikt als object??       
      
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  //currentUser pass je als prop in header omdat je je header (sign in of sign up text) wilt updaten als er een user is of niet
  render(){
    const {currentUser}=this.props;
    return(
    <div className="App">
    <Header  />
  
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
     <Route exact path='/signIn' render={()=>currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage/>) }/>
     
      </Switch>
    </div>
  );
}
};
const mapStateToProps =({user})=> ({
  currentUser:user.currentUser
})

const mapDispatchtoProps=dispatch =>({
 setCurrentUser: user => dispatch(setCurrentUser(user))//dispatch betekent vgm verzenden naar (action) functie (als argu) wat doet setCurrentUser: precies
})

export default connect(mapStateToProps,mapDispatchtoProps)(App);
