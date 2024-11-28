

/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */





const express  = require('express')
const {detectRegion }  = require('../controllers/geoipController');
const router = express.Router()



router.get('/detect',detectRegion);


module.exports = router;
