const express = require('express');
const NsdlesignDetails = require('../Controller/NSDL-E-SIGNControoler');
const router = express.Router();


router.post('/', NsdlesignDetails.createNsdlesign);
router.get('/', NsdlesignDetails.getAllgetAllNsdlesign);
router.put('/:id', NsdlesignDetails.updateNsdlesign);
router.delete('/:id', NsdlesignDetails.deleteNsdlesign)




module.exports = router;

