import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{

  const priceForStripe= price * 100;//je moet converten naar stripe omdat stripe prijzen in centen wilt
  const publishableKey='pk_test_51KPtwHJA028kN0rY1gFXajtqfmy4XoF9JSQPajM46nxAC7hnXkE1YcDkuAniLxEVQVcQr0lwVeEeoHFcxTngRlRV00bvhSnIV0';

  //https://github.com/azmenak/react-stripe-checkout link om te zien welke props je kan doen in StripeCheckout component

  const onToken=token=>{
    console.log(token);
    alert('payment succesfull');
  };
  return(
    <StripeCheckout 
    label ='Pay now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}//users moeten de hele prijs zien, niet de centen
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken} //zou je infeite naar je backend sturen om te processen
    stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
