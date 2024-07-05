const express = require('express');
const panApplicationController = require('../Controller/NewPANcontroller');
const router = express.Router();

// POST /api/applications - Create a new PAN application
router.post('/', panApplicationController.createApplication);

// GET /api/applications - Get all PAN applications
router.get('/', panApplicationController.getAllApplications);

// GET /api/applications/:id - Get PAN application by ID
router.get('/:id', panApplicationController.getApplicationById);

// PUT /api/applications/:id - Update PAN application by ID
router.put('/:id', panApplicationController.updateApplication);

// DELETE /api/applications/:id - Delete PAN application by ID
router.delete('/:id', panApplicationController.deleteApplicationById);

module.exports = router;
