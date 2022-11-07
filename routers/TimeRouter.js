const express = require('express')
const {timeStamp} = require('../controllers/TimeController')
const router = express.Router()

router.get('/', timeStamp)
router.get('/:timeString', timeStamp)

module.exports = router