import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state={
      email:'',
      password:''
      //bij forms kan je dus een state maken van de elementen die je moet intypen. In sign in zijn het email en pw; in sign-up zijn het andere dingen. Je maakt die states om vgm die value bij je inputform dynamisch te veranderen. Idk why et verandert zou moeten worden tho.*Opzoeken
    }
  }
handleSubmit= async (event)=>{
event.preventDefault();
const {email, password}=this.state;//want is in state gesaved die value van de input. **hierom is het ook nodig om state te koppelen aan value. zodat je de value makkelijk kan accessen.
try{
  await auth.signInWithEmailAndPassword(email,password);
  this.setState({email:'',password:''});//runt wanneer de bovenste line true is als het ware
}
catch(error){
  console.log(error);
}
}

handleChange=(event)=>{//handleChange runs on every keystroke and updates state
 const {name,value}=event.target;//je haalt name en value uit die event target (zie deconstructuring)

 this.setState({[name]:value})
 //je zet het tussen [] als het niet voorkwam. Dit is ook om de prop in je state dynamisch te veranderen

}
//<CustomButton onClick={signInWithGoogle} isGoogleSignIn> een prop als isGoogleSignIn is true als je het gewoon zo passed als prop
  render(){
    return(
    <div className='sign-in'>
      <h2> I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput name='email' type='email' label="Email" value={this.state.email} handleChange={this.handleChange} required/>
        
        <FormInput name='password' label="Password" type='password' value={this.state.password} handleChange={this.handleChange} required/>
        
        <div className='buttons'>
        <CustomButton type='submit'> Sign In </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
       
        {' '}
        Sign in with Google 
        {' '}
        </CustomButton>
        </div>
      </form>
    </div>
    )
  }
}

export default SignIn;
