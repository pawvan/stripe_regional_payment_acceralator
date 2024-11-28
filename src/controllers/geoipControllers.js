



/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */


const {getRegionIp}  = require('../services/geoipService')
exports.detectRegion = async (req  ,res)=>{

try{
  const ip = req.headers[x-forwarded-for'] ||  req.socket.remoteAddress;


    const regionData = await getRegionFromIp(ip)
  res.status(200).json(regionData)
  
}
  catch(error){
    res.status(500).json({ error: 'Failed to detect region' });
  }

  
}
