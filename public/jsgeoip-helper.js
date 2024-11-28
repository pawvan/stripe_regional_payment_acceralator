
/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */

async function detectRegion(){


  const response = await fetch('/api/geoip/detect')
  const data = await response.json()

console.log(data);


  
  
}
detectRegion()
