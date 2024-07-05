const express = require('express');
const NSDLDetails = require('../Controller/NSDLcontroller')

const router = express.Router();


router.post('/',NSDLDetails.createNSDLDetails);
router.get('/',NSDLDetails.getAllNsdlDetails);
router.get('/:id',NSDLDetails.getNSDLDetailsById);
router.put('/:id',NSDLDetails.updateNSDLDetails);
router.delete('/:id',NSDLDetails.deleteNSDLDetails)





module.exports = router;
