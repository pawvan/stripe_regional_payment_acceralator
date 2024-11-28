/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */

const express = require('express')
const bodyParser  = require('body-parser')
const cors = require('cors')
const geoipRoutes  = require('./routes/geoipRoutes')
const dashboardRoutes  =  require('./routes/dashboardRoutes')
const paymentRoutes = require('./routes/paymentRoutes')



const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))
app.use('/api/geoip',geoipRoutes)
app.use('/api/dashboard',dashboardRoutes)
app.use('/api/payment',paymentRoutes)
module.exports =app;
