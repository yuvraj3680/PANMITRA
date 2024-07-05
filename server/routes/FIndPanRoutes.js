const express = require('express');
const router = express.Router();
const findPanController = require('../Controller/FindPanController');

// Route to handle find PAN request by UID
router.get('/:uid', findPanController.findPanByUid);
router.get('/',findPanController.getAllCustomers)
module.exports = router;
