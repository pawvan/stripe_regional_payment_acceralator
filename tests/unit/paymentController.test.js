const {createPaymentaIntent } =  require('../../src/controllers/paymentController');
describe('Payment controller ' ,()=>{
it('should create a payment intent successfully',async()=>{
  const req ={

   body: {
        amount: 1000,
        currency: 'usd',
        paymentMethodType: 'card',
      },
    
  };

  const res  ={

    statsu:jest.fn().mockReturnThis();
    json:jest.fn();
  }
  await createPaymentIntent(req,res);
  expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ clientSecret: expect.any(String) }));
})

  
})
