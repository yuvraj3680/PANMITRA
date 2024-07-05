const express = require('express');
const adminController = require('../Controller/adminController');
const router = express.Router();

router.post('/', adminController.createAdmin);
router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.readAdminById);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdminById);

module.exports = router;
