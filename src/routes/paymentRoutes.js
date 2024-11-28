/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */



const {createPaymentIntent} = require('../controlers/paymentController')


const express  = require('express')
const routes  = express.Router()

router.post('/intent',createPaymentIntent)
module.exports = router
