const express = require('express');
const MinorPanDetails = require('../Controller/MinorPanController');

const router = express.Router();

router.post('/', MinorPanDetails.createMinorPanDetails);
router.get('/', MinorPanDetails.getAllMinorPanDetails);
router.put('/:id', MinorPanDetails. updateMinorPanDetails);





module.exports = router;