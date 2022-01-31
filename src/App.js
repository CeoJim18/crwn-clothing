import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch} from 'react-router-dom';
import './App.css';



//voordeel van switch is dat je niet per ongeluk gewoon meerdere routes zal renderen
class App extends React.Component {
  constructor(){
    super();
      this.state={
          currentUser:null
      }

  }
 unsubscribeFromAuth=null;

 componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
      if (userAuth){//als je out signed is het null, dan wordt currentUser ook null. Ben je ingesigned dan heeft et andere waardes
        const userRef = await createUserProfileDocument(userAuth);//dit returned een reference naar de datebase

        userRef.onSnapshot(snapShot =>{ //van die reference naar de database wil jij een snapshot
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          
            
        });
        
      }
     
        this.setState({currentUser:userAuth});
       
      
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return(
    <div className="App">

    <Header currentUser={this.state.currentUser}/>
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
     <Route path='/signIn' component={SignInAndSignUpPage} />
     
      </Switch>
    </div>
  );
}
}

export default App;
