



/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */



const stripe = require('../config/stripeConfig')

export.createPaymentIntent = async (req,res)=>{

 try{ 
const {
    amount , currency,paymentmethodType 
  } = req.body
const paymentIntent  = await stripe.paymentIntents.create(

  {

    amount, 
    currency ,
    payment_method_types:[paymentmethodType]
  }
)



res.status(400).json({
clientSecret : paymentIntent.client_secret,
})
 
  catch(error){
    console.log(error)
        res.status(500).json({ error: 'Failed to create payment intent' });

    
}
}
