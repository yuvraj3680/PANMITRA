const PANApplication = require('../model/NewPANmodel');

const panApplicationController = {
  createApplication: async (req, res) => {
    try {
      const data = req.body;
      const newApplication = await PANApplication.createApplication(data);
      res.status(201).send({ status: '1', data: newApplication });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  getAllApplications: async (req, res) => {
    try {
      const applications = await PANApplication.getAllApplications();
      res.status(200).send({ status: '1', data: applications });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  getApplicationById: async (req, res) => {
    try {
      const id = req.params.id;
      const application = await PANApplication.getApplicationById(id);
      if (application) {
        res.status(200).send({ status: '1', data: application });
      } else {
        res.status(404).send({ status: '0', message: 'Application not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  updateApplication: async (req, res) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const updatedApplication = await PANApplication.updateApplicationById(id, data);
      res.status(200).send({ status: '1', data: updatedApplication });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },

  deleteApplicationById: async (req, res) => {
    try {
      const id = req.params.id;
      await PANApplication.deleteApplicationById(id);
      res.status(200).send({ status: '1', message: 'Application deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: '0', error: error.message });
    }
  },
};

module.exports = panApplicationController;
