/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */


const stripe = require('../config/stripeConfig')



export.getAnalytics  = async (req  ,res)=>{
try{

const report  = await stripe.report.reportRuns.List(

  
  {
limit :5
  }
);
  res.status(200).json(report.data)


  
  
}

  catch(error){

    res.status(500).json(
      {
        error:'Failed to fetch analytics'
      }
    )
  }


  
};
