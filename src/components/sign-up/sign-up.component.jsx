import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

class SignUp extends React.Component{
  constructor(){
    super();
    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
 //you store in state what the users will type in the field
    }
  }

  handleSubmit= async event=>{
    event.preventDefault();
    const{displayName,email,password,confirmPassword}=this.state;

    if(password !== confirmPassword){
      alert(`Passwords dont match`);
      return;
    }

    try{
      const {user}= await auth.createUserWithEmailAndPassword(email,password);//opzoeken over createUserWithEmailAndPassword
      //createUserWithEmailAndPassword returned een user, maar als de email al in bruik is, produceert het een error die gecatch zal worden.
      //dit gaat dus gelijk naar catch springen
      //om in te signen heet de method signInwithEmailAndPassword
      //console.log(user); --> vandaar dit niet wordt uitgevoerd
      await createUserProfileDocument(user, {displayName});//door {displayName} te notern between curly braces, pass je het in key value pair (object zie: https://stackoverflow.com/questions/37722619/javascript-curly-braces-argument-as-function-parameter/37722746)


      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      })
    } catch(err){
      console.log(err);

    }

  }


  handleChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value})//die [] tussen name zorgt ervoor dat niet de woord name wordt gebruikt als key, maar de waarde die het in zich heeft (dus email etc)
  }
  render(){
    const{displayName,email,password,confirmPassword}=this.state;
    return(
      <div className="sign-up">
        <h2 classname='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={displayName}
           onChange={this.handleChange} label='Display Name' required>
          </FormInput>
          <FormInput type='email' name='email' value={email}
           onChange={this.handleChange} label='Email' required>
          </FormInput>
          <FormInput type='password' name='password' value={password}
           onChange={this.handleChange} label='Password' required>
          </FormInput>
          <FormInput type='password' name='confirmPassword' value={confirmPassword}
           onChange={this.handleChange} label='Confirm Password' required>
          </FormInput>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }

}

export default SignUp;