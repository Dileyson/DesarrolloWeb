const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb)
router.get(vs + "/airbnb/property-types", airbnbCtr.consultarAirbnbPropertyType)
router.get(vs + "/airbnb/order/reviews", airbnbCtr.consultarAirbnbReviews)
router.get(vs + "/airbnb/order/beds/:nro_beds", airbnbCtr.consultarAirbnbBeds)

module.exports = router
