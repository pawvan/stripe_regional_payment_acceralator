/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */


require('dotenv').config()

const app = require('./app')
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
  console.log(`runnnig the server at  the ${PORT}`)
})
