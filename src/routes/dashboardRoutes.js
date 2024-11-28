/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */



const express = require('express')
const {getAnalytics  } =require('../controllers/analyticsController')





const router  = express.Router();

router.use('/',getAnalytics);
module.exports = router;
