/**
 * This code is licensed to Pawvan. All rights reserved.
 * Redistribution or use in any form without explicit permission is prohibited.
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
module.exports = stripe
