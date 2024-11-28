
/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */


const axios  = require('axios')

const {GEOIP_API_URL,GEOIPAPI_KEY}= require('../config/geoipConfig')


exports.getRegionFromIp = async (ip)=>{


const response = await axios.get(`{GEOIP_API_URL}?=apikey=${GEOIP_API_KEY}&=${ip}`)
return response.data;
}

